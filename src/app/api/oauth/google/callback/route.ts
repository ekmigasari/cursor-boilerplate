import { generateId } from "lucia";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

import generateUserId from "@/libs/userIdGenerator";
import { googleAuth, lucia } from "@/utils/lucia";
import prisma from "@/utils/prisma";

interface GoogleUser {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  picture: string;
  locale: string;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state) {
    return new Response("Invalid request", { status: 400 });
  }

  const storedCodeVerifier = cookies().get("googleCodeVerifier")?.value;
  const storedState = cookies().get("googleAuthState")?.value;

  //    if there is no code verifier or stored state, return an error
  if (!storedCodeVerifier || !storedState) {
    return new Response("Code verifier or saved state is not exists", {
      status: 400,
    });
  }

  //    if the state does not match, return an error
  if (storedState !== state) {
    return Response.json(
      {
        error: "State does not match",
      },
      {
        status: 400,
      },
    );
  }

  //  validate authorization code
  try {
    const { accessToken } = await googleAuth.validateAuthorizationCode(code, storedCodeVerifier);

    const googleRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "GET",
    });

    const googleData = (await googleRes.json()) as GoogleUser;

    // check if user exists
    const isUserExist = await prisma.oauth.findUnique({
      where: {
        providerId_providerUserId: {
          providerId: "google",
          providerUserId: googleData.id,
        },
      },
      include: {
        user: true,
      },
    });

    let user = null;

    // if user does not exist, create user
    if (!isUserExist) {
      const newUser = await prisma.user.create({
        data: {
          id: generateId(16),
          userId: generateUserId(googleData.name, 4, 10),
          name: googleData.name,
          email: googleData.email,
          avatar: googleData.picture,
        },
      });

      await prisma.oauth.create({
        data: {
          providerId: "google",
          providerUserId: googleData.id,
          userId: newUser.id,
        },
      });

      user = newUser;

      console.log("User created");
    } else {
      user = isUserExist.user;

      console.log("User exist");
    }

    // create session
    const session = await lucia.createSession(user.id, {});
    const sessionStore = lucia.createSessionCookie(session.id);
    cookies().set(sessionStore.name, sessionStore.value, sessionStore.attributes);

    return new Response(null, {
      status: 302,
      headers: {
        message: "Successfully logged in",
        Location: "/dashboard?status=success&message=Welcome",
      },
    });
  } catch (error) {
    console.log(error);
    // Return an error response with a 500 status code
    return new Response("Internal Server Error", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
