import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="primary-gradient w-full gap-10 flex items-center rounded-lg relative p-10">
        <Image
          src="/shopping.png"
          alt="shopping-image"
          height={300}
          width={480}
          className="absolute -right-4 bottom-0 mobile-view"
        />

        <div className="gap-10 flex flex-col">
          <p className="font-semibold text-2xl">New Summer 2024</p>
          <h1 className="font-semibold text-2xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-regular text-xl">
            We know how large objects will act, but things on a small scale.
          </p>

          <Button className="px-4 py-3 bg-white text-lg min-h-12 rounded-2xl">
            Shop Now
          </Button>
        </div>
      </div>

      <h1 className="font-semibold text-2xl">New Arrivals</h1>

      <h1 className="font-semibold text-2xl">Top Selling</h1>
    </>
  );
}
