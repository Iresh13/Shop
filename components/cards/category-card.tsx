import { Category } from "@/schemas/category-schema";
import React, { Fragment } from "react";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Fragment>
      {category.image && category.name.toLowerCase() !== "new category" && (
        <div
          className="relative rounded-lg transition-transform hover:scale-105 group hover:text-light-900 text-dark-800 "
          style={{
            width: 350,
            height: 400,
            opacity: "80%",
            resize: "both",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${category.image})`,
          }}
        >
          <section className="absolute inset-0 primary-gradient opacity-40 group-hover:opacity-0 transition-opacity duration-300 rounded-lg" />

          <p className="relative text-4xl opacity-100 font-medium uppercase p-10 z-10">
            {category.name}
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryCard;
