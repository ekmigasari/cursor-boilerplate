"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { GoogleOauth } from "./action.googleOauth";

export default function Page() {
  <main>
    <form action={GoogleOauth}>
      <Button type="submit">Login with Google</Button>
    </form>
    <div className="text-center">
      <p className="text-sm">
        Don&apos;t have an account? <Link href="/register">Register here</Link>
      </p>
    </div>
  </main>;
}
