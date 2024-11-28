"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import PageLayout from "@/components/layout/page-layout";

export default function GlobalError({ error }: { error: Error }) {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center gap-7">
        <h1 className="text-4xl font-semibold">{error.name}</h1>
        <p className="text-medium font-medium text-dark400_light500 text-center">
          {error.message}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <Button
          className="min-h-12 bg-dark-400 px-12 py-5 text-light-100 text-lg shadow-sm rounded-md hover:bg-dark-500 hover:dark:bg-dark-300"
          data-testid="refresh"
          aria-label="refresh"
          onClick={() => router.refresh()}
        >
          Refresh
        </Button>

        {isHomePage && (
          <Link data-testid="back_to_home" href="/">
            <Button
              className="min-h-12 bg-dark-400 px-12 py-5 text-light-100 text-lg shadow-sm rounded-md hover:bg-dark-500 hover:dark:bg-dark-300"
              aria-label="return_home"
            >
              Return to home
            </Button>
          </Link>
        )}
      </div>
    </PageLayout>
  );
}
