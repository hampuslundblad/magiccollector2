import { LoaderIcon } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { debounce } from "lodash";
import cardNames from "../lib/cardNames.json";
import SearchItem from "./SearchItem";
import { CardData } from "@/app/cards/page";

type SearchProps = {
  setCardData: (cardData: CardData) => void;
}

const Search = ({setCardData}: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredValues, setFilteredValues] = useState<string[]>([]);
  const [cardsPreview, setCardsPreview] = useState(false);
  const addedCardsRef = useRef<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setCardsPreview(true);
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
      </div>
      <div
        className="w-fill h-fit mt-2 divde-y divide-solid"
        onClick={() => setCardsPreview(false)}
      >
        
        { cardsPreview && filteredValues.slice(0, 10).map((cardName, index) => (
          <SearchItem name={cardName} key={index} setCardData={setCardData} />
        ))}
      </div>
    </div>
  );
};

export default Search;
