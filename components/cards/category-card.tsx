import { Category } from "@/schemas/category-schema";
import React, { Fragment } from "react";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Fragment>
      {category.image && category.name.toLowerCase() !== "new category" && (
        <div
          className="rounded-lg"
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
          <p className="text-4xl opacity-100 font-medium text-dark-800 uppercase p-10 -z-10">
            {category.name}
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryCard;
