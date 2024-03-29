export default function BookingButton(props) {
  if (props.IsBookable) {
    return (
      <>
        <button className="HouseCard-bookButton">Book</button>
      </>
    );
  } else if (props.DaysBooked === 0) {
    return (
      <>
        <button disabled className="HouseCard-bookButton">Not Bookable</button>
      </>
    );
  } else {
    return (
      <>
        <div className="HouseCard-DaysBooked">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9136 5.07477C12.0653 4.85741 12.0122 4.55818 11.7948 4.40641C11.5775 4.25464 11.2782 4.30781 11.1265 4.52516L6.9673 10.4816L4.7997 8.54616C4.60196 8.3696 4.29852 8.38677 4.12196 8.58451C3.9454 8.78225 3.96257 9.08569 4.16031 9.26225L6.73144 11.558L7.44469 11.4748L11.9136 5.07477Z"
              fill="#11A960"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM15.2 8C15.2 11.9764 11.9764 15.2 8 15.2C4.02355 15.2 0.8 11.9764 0.8 8C0.8 4.02355 4.02355 0.8 8 0.8C11.9764 0.8 15.2 4.02355 15.2 8Z"
              fill="#11A960"
            />
          </svg>
          <p>Booked for {props.DaysBooked} days</p>
        </div>
      </>
    );
  }
}
