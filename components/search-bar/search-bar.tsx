import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full border-primary dark:border-white border-2 flex gap-2 items-center shadow-sm rounded-xl px-3 py-2">
      <Search />
      <Input
        placeholder="Search..."
        className="border-none no-focus shadow-none text-lg placeholder"
      />
    </div>
  );
};

export default SearchBar;
