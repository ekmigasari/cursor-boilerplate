"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { UserServices } from "@/services/user.services";
import { userSchema } from "@/types/userProps";
import { lucia } from "@/utils/lucia";

export async function EditUserAction(_: unknown, formData: FormData) {
  const cookieStore = cookies().get(lucia.sessionCookieName)?.value;
  if (!cookieStore) redirect("/");

  const { session, user } = await lucia.validateSession(cookieStore);
  if (!session) redirect("/");

  const cookieUserId = user.userId;
  const id = user.id;

  const inputUserId = formData.get("userId") as string;
  const name = formData.get("name");
  const bio = formData.get("bio");
  const instagram = formData.get("instagram");

  //Check userId is new or same
  let newUserId: string | undefined;

  if (cookieUserId !== inputUserId) {
    newUserId = inputUserId;
  } else {
    newUserId = undefined;
  }

  const validation = await userSchema.safeParseAsync({
    newUserId,
    name,
    bio,
    instagram,
  });

  if (!validation.success) {
    console.log("Validation errors:", validation.error.errors);
    console.log("Flattened errors:", validation.error.flatten().fieldErrors);
    console.log("Input data:", {
      newUserId,
      name,
      bio,
      instagram,
    });

    return {
      status: "error",
      errors: validation.error.flatten().fieldErrors,
      data: {
        newUserId,
        name,
        bio,
        instagram,
      },
    };
  }

  //UserId after validation
  let userId: string;
  if (validation.data.newUserId === undefined) {
    userId = cookieUserId;
  } else {
    userId = validation.data.newUserId;
  }

  const updatedUser = await UserServices.updateUserProfile({
    id: id,
    userId: userId,
    name: validation.data.name,
    bio: validation.data.bio,
    instagram: validation.data.instagram,
  });

  if (!updatedUser) {
    return {
      status: "error",
      message: "Error update profile",
    };
  }

  redirect(`/users/${updatedUser.userId}`);
}
