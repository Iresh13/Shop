import { Button } from "@/components/ui/button";
import Image from "next/image";
import BannerCard from "./components/banner-card";

export default function Home() {
  return (
    <>
      <BannerCard />

      <h2 className="font-semibold text-4xl text-dark800_light200 uppercase">
        New Arrivals
      </h2>

      <h2 className="font-semibold text-4xl text-dark800_light200 uppercase">
        Top Selling
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="border-2 border-zinc-800 flex flex-col">
          <Image
            src="/model.png"
            alt="shopping-image"
            height={450}
            width={550}
            className="object-center"
          />
          <p>Jeans</p>
          <p>$40.50</p>
        </div>

        <div className="border-2 border-zinc-800 flex flex-col">
          <Image
            src="/model.png"
            alt="shopping-image"
            height={450}
            width={550}
            className="object-center"
          />
          <p>Jeans</p>
          <p>$40.50</p>
        </div>

        <div className="border-2 border-zinc-800 flex flex-col">
          <Image
            src="/model.png"
            alt="shopping-image"
            height={450}
            width={550}
            className="object-center"
          />
          <p>Jeans</p>
          <p>$40.50</p>
        </div>
      </div>
    </>
  );
}
