import { FC, useContext, useState } from "react";
import axios from "axios";
import { searchCard } from "@/lib/scryfall";
import { CardContext } from "@/lib/CardContext";
import { CardData } from "@/app/cards/page";
interface SearchItemProps {
  name: string;
  setCardData: (cardData: CardData) => void;
}

const SearchItem: FC<SearchItemProps> = ({ name, setCardData }) => {
  const handleClick = async (name: string) => {
    const data = await searchCard(name);
    setCardData(data);
  };

  return (
    <div
      onClick={() => handleClick(name)}
      className="hover:bg-blue-200 hover:cursor-pointer rounded-sm p-1 "
    >
      {name}
    </div>
  );
};

export default SearchItem;
