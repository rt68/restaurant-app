export default function Footer() {
  const myStyle = {
    listStyle: "none",
    fontSize: "16px",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };
  return (
    <div>
      <h2>Ramen Time</h2>
      <ul style={myStyle}>
        <li>Contact</li>
        <li>Tel: (757)-808-7277</li>
        <li>(757)-808-7164</li>
        <li>
          <a href="https://www.facebook.com/RamenTalkwilliamsburg">
            Facebook Page
          </a>
        </li>
        <li>
          <a href="https://www.google.com/maps/place/Ramen+Time/@37.2942501,-76.7257842,15z/data=!4m6!3m5!1s0x89b0891b52203b49:0x9269f0aaafb856ee!8m2!3d37.2942501!4d-76.7257842!16s%2Fg%2F11tsp991zy?entry=ttu">1640 Richmond Rd Williamsburg, VA 23185</a>
        </li>
      </ul>
    </div>
  );
}
