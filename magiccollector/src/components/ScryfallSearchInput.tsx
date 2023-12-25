import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { debounce } from "lodash";
import  cardNames from "../lib/cardNames.json"

const ScryfallSearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredValues, setFilteredValues] = useState<string[]>([])
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    debouncedSearch();
    if (value.trim() === "") {
      setFilteredValues([]);
      return;
    }  
    else if (value.length <= 2){
      return;
    }
    else {
      debouncedSearch()
    }
  };

  const filterCards = () => { 
      if(searchValue.trim() !== ""){
        setFilteredValues(cardNames.filter((x) => x.toLowerCase().includes(searchValue.toLowerCase())));
      }
  };

  const debouncedSearch = debounce(filterCards, 300); // Debounce the handleSearch function

  

  return (
    <div>
      <Input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {isLoading && <LoaderIcon />}
      <div className="w-fill h-fit mt-2 divde-y divide-solid">
        {filteredValues.slice(0,10).map((x) => <div> {x} </div>)}
      </div>
    </div>
  );
};

export default ScryfallSearchInput;