import { Input } from "@chakra-ui/react";
import React from "react";

export const SearchBar = ({variant,placeholder, searchQuery, setSearchQuery, handleKeyDown, searchBarWidth}) => {
  return (
    <div>
      <Input
        variant={variant}
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        width={searchBarWidth}
      />
    </div>
  );
};

