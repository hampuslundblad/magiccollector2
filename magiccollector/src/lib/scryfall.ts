import { CardData } from "@/app/cards/page";
import axios from "axios";
const baseUrl = "https://api.scryfall.com/cards/search";


export async function searchCard(cardName: string) : Promise<CardData>{
  const { data } = await axios.get(baseUrl, { params: { q: cardName, unique:"prints" } });
  
  const sets = data.data.map((x: { set: any; }) => x.set)

  const cardData = data.data[0];
  const image_uri_small = cardData.image_uris.small;
  const card_name = cardData.name;
  const price = cardData.prices.eur;

  return { name: card_name, image_uri: image_uri_small, price: price, sets: sets};
}
