export default function BookingStatus(props) {
  if (props.IsBookable) {
    return (
      <>
        <div style={{ backgroundColor: "green" }}>Book</div>
      </>
    );
  } else if (props.DaysBooked === 0) {
    return (
      <>
        <div style={{ backgroundColor: "red" }}>Not Bookable</div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ backgroundColor: "#2C64B7" }}>booked</div>
      </>
    );
  }
}
