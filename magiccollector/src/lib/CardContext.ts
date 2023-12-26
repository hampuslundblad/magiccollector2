import { CardData } from "@/app/cards/page";
import { Dispatch, SetStateAction, createContext } from "react";


export type CardContextType = {
    cardData : CardData | undefined,
    setCardData: Dispatch<SetStateAction<CardData | undefined>>
    }

export const CardContext = createContext<CardContextType>({ cardData: undefined, setCardData: () => {} });
