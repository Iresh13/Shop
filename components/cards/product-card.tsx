import { Product } from "@/schemas/product-schema";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="primary-gradient rounded-xl shadow-md flex flex-col max-w-[360px]">
      {product.title.toLowerCase() !== "new product" && product.images?.[0] && (
        <div className="items-center justify-center flex flex-col">
          <Image
            src={product.images[0].replace(/[\["]/g, "")}
            alt={product.title}
            height={450}
            width={450}
            className="rounded-t-xl"
          />
        </div>
      )}

      <div className="items-start flex flex-col gap-4 p-5">
        <h2 className="text-dark800 font-semibold text-2xl">
          {product.title.toUpperCase()}
        </h2>
        <h4 className="text-dark800 font-medium text-xl">${product.price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
