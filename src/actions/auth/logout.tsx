"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { lucia, validateRequest } from "@/utils/lucia";

// Define logout function
export async function LogoutAction() {
  // Validate the session using validateRequest function
  const sessions = await validateRequest();

  const session = sessions?.session;

  // Check if session is not found
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  // Invalidate the current session
  await lucia.invalidateSession(session.id);

  // Create a new blank session cookie
  const sessionCookie = lucia.createBlankSessionCookie();

  // Set the new session cookie (assuming cookies() function exists)
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  // Redirect to the homepage
  redirect("/?status=success&message=Logout successfully");
}
