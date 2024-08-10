/*eslint-disable @typescript-eslint/no-misused-promises */

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { GoogleOauth } from "@/actions/auth/google-oauth";
import { Button } from "@/components/ui/Button";
import { ZoongleLoader } from "@/components/loader/Loading";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-200 p-4">
      <Suspense fallback={<ZoongleLoader />}>
        <div className="w-full max-w-md space-y-8 border-4 border-black bg-white p-8 shadow-bru-right-xl">
          <section className="text-center">
            <h1 className="mb-2 text-4xl font-bold">Zoongle</h1>
            <h2 className="mb-4 text-xl font-semibold">Join the Pet Paradise!</h2>
          </section>

          <section className="relative mb-6 h-48 w-full">
            <Image
              src="/asset/pet-owner.svg"
              alt="Collage of various pets"
              fill
              style={{ objectFit: "contain" }}
              className="border-2 border-black bg-bru-glow"
            />
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-semibold">Create Your Zoongle Account</h3>
            <p>Start your journey in the world&apos;s most pawsome pet community!</p>
          </section>
          <form action={GoogleOauth}>
            <Button variant="accent" width="full" type="submit">
              Continue with Google
            </Button>
          </form>
          <section className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-blue-500 hover:underline">
                Log in here
              </Link>
            </p>
          </section>
        </div>
      </Suspense>
    </main>
  );
}
