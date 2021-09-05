import { useEffect, useState } from "react";
import GetCards from "./service/RestService";
import BookingButton from "./components/BookingButton";
import BookingStatus from "./components/BookingStatus"
import "./App.css";

export default function RenderCards() {
  let [cards, setCards] = useState([]);
   const RetriveCards = async () => {
    let RetrivedCards = await GetCards();
    setCards(  RetrivedCards );
  };
  useEffect(() => RetriveCards(), []);

  return (
    <div className="CardList">
        {cards.length ?  cards.map(card => (  
          <div className="HouseCard" key={card.id}>
              <BookingStatus IsBookable={card.bookable} DaysBooked={card.booked}/>
            <img src={card.image} width="300px" alt="sum good mountains">
            </img>
            <p>{card.id}</p>
            <h3>{card.name}</h3>
            <BookingButton IsBookable={card.bookable} DaysBooked={card.booked} />
          </div>
          )) : <div>oh no</div>}
    </div>
  );
}
