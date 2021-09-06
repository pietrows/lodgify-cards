import { useEffect, useState } from "react";
import GetCards from "./service/RestService";
import BookingButton from "./components/BookingButton";
import BookingStatus from "./components/BookingStatus"
import "./App.scss";
export default function RenderCards() {
  let [cards, setCards] = useState([]);
   const RetriveCards = async () => {
    let RetrivedCards = await GetCards();
    setCards(  RetrivedCards );
  };
  useEffect(() => RetriveCards(), []);
  const CardStyle = "HouseCard"
  const AvaliableCardStyle = "HouseCard HouseCard-hover"
  return (
    <div className="CardList">
        {cards.length ?  cards.map(card => (  
          <div className={card.bookable ? AvaliableCardStyle : CardStyle} key={card.id} >
              <BookingStatus IsBookable={card.bookable} DaysBooked={card.booked}/>
            <img src={card.image } className="HouseCard-image" alt={card.name}>
            </img>
            <div className="HouseCard-info">
            <p>Id: {card.id}</p>
            <h3>{card.name}</h3>
            </div>
            <BookingButton IsBookable={card.bookable} DaysBooked={card.booked} />
          </div>
          )) :<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_nzftwbhc.json"  background="transparent"  speed="1"  style={{width: '300px' , height: '300px'}}  loop  autoplay></lottie-player>}
    </div>
  );
}

