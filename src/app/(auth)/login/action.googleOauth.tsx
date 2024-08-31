"use server";

import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { googleAuth } from "@/utils/lucia";

export async function GoogleOauth(_: FormData) {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await googleAuth.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  cookies().set("googleAuthState", state, {
    secure: process.env.NODE_ENV === "production",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });

  cookies().set("googleCodeVerifier", codeVerifier, {
    secure: process.env.NODE_ENV === "production",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });

  redirect(url.toString());
}
