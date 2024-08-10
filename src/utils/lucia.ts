// import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
// import { Google } from "arctic";
// import { error } from "console";
// import { Lucia, TimeSpan } from "lucia";
// import { cookies } from "next/headers";
// import { cache } from "react";

// import { googleCallback } from "@/config/googleCallback";

// import prisma from "./prisma";

// const dbAdapter = new PrismaAdapter(prisma.session, prisma.user);

// export const lucia = new Lucia(dbAdapter, {
//   sessionExpiresIn: new TimeSpan(2, "w"),

//   sessionCookie: {
//     expires: false,
//     attributes: {
//       secure: process.env.NODE_ENV === "production",
//     },
//   },
//   getUserAttributes: (attributes) => {
//     return {
//       name: attributes.name,
//       avatar: attributes.avatar,
//       email: attributes.email,
//       userId: attributes.userId,
//       bio: attributes.bio,
//       id: attributes.id,
//       instagram: attributes.instagram,
//     };
//   },
// });

// export const googleAuth = new Google(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, googleCallback);

// export const validateRequest = cache(async () => {
//   const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
//   if (!sessionId) return null;

//   const { user, session } = await lucia.validateSession(sessionId);
//   try {
//     if (session?.fresh) {
//       const sessionCookie = lucia.createSessionCookie(session.id);
//       cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
//     }
//     if (!session) {
//       const sessionCookie = lucia.createBlankSessionCookie();
//       cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
//     }
//   } catch {
//     error;
//   }
//   return { user, session };
// });

// declare module "lucia" {
//   interface Register {
//     Lucia: typeof lucia;
//     DatabaseUserAttributes: DatabaseUserAttributes;
//   }
// }

// interface DatabaseUserAttributes {
//   name: string;
//   avatar: string;
//   email: string;
//   userId: string;
//   bio: string;
//   id: string;
//   instagram: string;
// }
