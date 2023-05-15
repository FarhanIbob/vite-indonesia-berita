/* eslint-disable react/prop-types */
export default function WelcomeCardItemsMessage({ message }) {
  return (
    <div
      className="text-left text-capitalize  mb-3"
      style={{ fontSize: "18px", width: "1000px", maxWidth: "100%" }}
    >
      {message}
    </div>
  );
}