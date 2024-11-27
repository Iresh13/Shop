import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full border-dark-600 dark:border-light-300 border-2 flex gap-2 items-center shadow-sm rounded-xl px-3 py-2">
      <Search className="w-6 h-6 text-dark300_light600" />
      <Input
        placeholder="Search..."
        className="border-none no-focus shadow-none text-lg placeholder"
      />
    </div>
  );
};

export default SearchBar;
