export default function BookingButton(props) {
  if (props.IsBookable) {
    return (
      <>
        <button>Book</button>
      </>
    );
  } else if (props.DaysBooked === 0) {
    return (
      <>
        <button>not bookable</button>
      </>
    );
  } else {
    return (
      <>
        <button>booked for {props.DaysBooked} days</button>
      </>
    );
  }
}
