import { LoaderIcon } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { debounce } from "lodash";
import cardNames from "../lib/cardNames.json";
import SearchItem from "./SearchItem";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredValues, setFilteredValues] = useState<string[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [cardsPreview, setCardsPreview] = useState(false);
  const addedCardsRef = useRef<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setCardsPreview(true);
    setShowTooltip(false); // Reset the tooltip when the user types
    debouncedFilter();
  };

  const filterCards = useCallback(() => {
    setFilteredValues(
      cardNames.filter((x) =>
        x.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  const debouncedFilter = debounce(filterCards, 300);

  useEffect(() => {
    const tooltipTimeout = setTimeout(() => {
      if (searchValue.trim() === "") {
        setShowTooltip(true);
      }
    }, 1000);

    return () => {
      clearTimeout(tooltipTimeout);
    };
  }, [searchValue]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && filteredValues.length > 0) {
        event.preventDefault();
        addedCardsRef.current.push(filteredValues[0]);
        console.log("Added card:", filteredValues[0]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredValues]);

  return (
    <div>
      <div className="relative">
        <Input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        {showTooltip && (
          <div className="absolute top-full left-0 mt-2 text-gray-500">
            Press{" "}
            <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
              Tab
            </kbd>{" "}
            to add card
          </div>
        )}
      </div>
      {isLoading && <LoaderIcon />}
      <div
        className="w-fill h-fit mt-2 divde-y divide-solid"
        onClick={() => setCardsPreview(false)}
      >
        
        { cardsPreview && filteredValues.slice(0, 10).map((cardName, index) => (
          <SearchItem name={cardName} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Search;
