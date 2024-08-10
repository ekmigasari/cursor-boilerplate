"use server";

import { cookies } from "next/headers";

import { lucia } from "@/utils/lucia";

export async function getAuthStatus() {
  const cookieStore = cookies().get(lucia.sessionCookieName)?.value;
  if (!cookieStore) {
    return { isLoggedIn: false, user: null };
  }

  const { session, user } = await lucia.validateSession(cookieStore);
  if (!session) {
    return { isLoggedIn: false, user: null };
  }

  return { isLoggedIn: true, user };
}
