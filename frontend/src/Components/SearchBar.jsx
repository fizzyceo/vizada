import React, { useEffect, useState } from "react";
import { useCoursesStore } from "../stores/Courses";
import { Input, Typography } from "@material-tailwind/react";
import { MagnifyingGlassIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { navSearch } = useCoursesStore((state) => state);

  // Debounce function to delay search execution
  const debounce = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // Function to perform search
  const callSearch = async (key) => {
    setLoading(true);
    try {
      const results = await navSearch(key);
      setSearchResults(results);
    } catch (error) {
      console.error("Error occurred during search:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search function
  useEffect(() => {
    let timer;
    if (search.length >= 3) {
      timer = setTimeout(() => {
        callSearch(search);
      }, 300); // Delay of 1000 milliseconds (1 second)
    } else {
      setSearchResults([]);
    }

    // Cleanup function to clear the timeout on component unmount or search term change
    return () => clearTimeout(timer);
  }, [search, navSearch]);

  // Function to highlight occurrences of search term in text
  const highlightSearchTerm = (text) => {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(regex, '<span class="bg-yellow-200">$1</span>');
  };

  return (
    <div className="flex-grow md:w-[300px] lg:w-[500px] relative">
      <Input
        className=""
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<MagnifyingGlassIcon className="w-7" />}
        onFocus={() => setShowSearch(true)}
        onBlur={() => {
          // Delay closing the search results to allow clicking on links
          setTimeout(() => setShowSearch(false), 200);
        }}
      />
      {showSearch && (
        <div className="absolute -bottom-[260px] h-64 md:w-[300px] lg:w-[500px] p-3 bg-white shadow-md">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <Typography>Loading...</Typography>
            </div>
          ) : (
            <ul className="overflow-y-auto max-h-60">
              {searchResults?.length > 0 &&
                searchResults.slice(0, 8).map((result, index) => (
                  <li
                    key={index}
                    className="py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <a href={result.link}>
                      <div className="flex flex-row gap-1 items-center">
                        <PlayCircleIcon className="w-4 md:w-5 text-yellow-700" />
                        <p
                          className="text-xs md:text-sm"
                          dangerouslySetInnerHTML={{
                            __html: highlightSearchTerm(result.Nomc),
                          }}
                        />
                      </div>
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
