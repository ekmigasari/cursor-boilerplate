/*eslint-disable @typescript-eslint/no-misused-promises */

"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { GoogleOauth } from "@/actions/auth/google-oauth";
import { Button } from "@/components/ui/Button";
import { ZoongleLoader } from "@/components/loader/Loading";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-yellow-200 p-4">
      <Suspense fallback={<ZoongleLoader />}>
        <div className="w-full max-w-md space-y-8 border-4 border-black bg-bru-cream p-8 shadow-bru-right-xl">
          <div className="text-center">
            <h1 className="mb-2 text-4xl font-bold">Zoongle</h1>
            <h2 className="mb-4 text-xl font-semibold">Pet Lovers Unite!</h2>
          </div>

          <div className="relative mb-6 h-48 w-full">
            <Image
              src="/asset/pet-owner.svg"
              alt="Collage of various pets"
              fill
              style={{ objectFit: "contain" }}
              className="border-2 border-black bg-bru-glow"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Welcome to Zoongle</h3>
            <p>Join our community of pet enthusiasts and share your furry friends with the world!</p>
          </div>
          <form action={GoogleOauth}>
            <Button variant="accent" width="full" type="submit">
              Login with Google
            </Button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-blue-500 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
