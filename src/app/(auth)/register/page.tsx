"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { GoogleOauth } from "../login/action.googleOauth";

export default function Page() {
  <main>
    <form action={GoogleOauth}>
      <Button type="submit">Register with Google</Button>
    </form>
    <div className="text-center">
      <p className="text-sm">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-blue-500 hover:underline">
          Log in here
        </Link>
      </p>
    </div>
  </main>;
}
