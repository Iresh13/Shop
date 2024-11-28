import { Product } from "@/schemas/product-schema";
import Image from "next/image";
import React, { Fragment } from "react";
import { Button } from "../ui/button";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Fragment>
      {!product.title.toLowerCase().includes("new") &&
        !product.title.toLowerCase().includes("test") && (
          <div className="flex items-center justify-center rounded-lg">
            <div className="w-[350px] h-[550px]  [perspective:1000px] group">
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <section className="absolute w-full h-full [backface-visibility:hidden] rounded-lg bg-gray-200 dark:bg-primary-800 flex flex-col">
                  <Image
                    src={product.images[0]?.replace(/[\["]/g, "")}
                    alt={product.title}
                    height={400}
                    width={380}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="items-start flex flex-col gap-4 p-5">
                    <h2 className="text-dark800 font-semibold text-xl">
                      {product.title.toUpperCase()}
                    </h2>
                    <h4 className="text-dark800 font-medium text-xl">
                      ${product.price}
                    </h4>
                  </div>
                </section>

                <section className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]  text-primary-foreground  from-primary-200 bg-gradient-to-r  to-primary-300 text-dark800 p-6 rounded-xl rotate-y-180 backface-hidden flex flex-col justify-between gap-5">
                  <div className="flex gap-5 flex-col">
                    <h2 className="text-2xl font-bold text-dark-950">
                      {product.title.toUpperCase()}
                    </h2>
                    <p className="mt-2 text-md text-dark-700">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-dark-700">
                      ${product.price}
                    </h4>
                    <Button className="bg-primary-700 text-light-50 px-8 py-5 rounded-md hover:bg-primary-600 text-xl">
                      Buy Now
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
    </Fragment>
  );
};

export default ProductCard;
