export default function BookingStatus(props) {
  if (props.IsBookable) {
    return (
      <>
        <div className="HouseCard-cardLabel HouseCard-cardLabel__avaliable">avaliable</div>
      </>
    );
  } else if (props.DaysBooked === 0) {
    return (
      <>
        <div className="HouseCard-cardLabel HouseCard-cardLabel__unavaliable">unavaliable</div>
      </>
    );
  } else {
    return (
      <>
        <div className="HouseCard-cardLabel HouseCard-cardLabel__booked">booked</div>
      </>
      
    );
  }
}
