function CreditCard(props) {
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        width: "630px",
        height: "330px",
        borderRadius: "15px",
        padding: "35px",
        boxSizing: "border-box",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Card logo */}
      <div style={{ textAlign: "right" }}>
        {props.type === "Visa" ? (
          <img src="/src/assets/images/visa.png" width="100" />
        ) : (
          <img src="/src/assets/images/master-card.svg" width="100" />
        )}
      </div>

      {/* Card number */}
      <div style={{ fontSize: "45px", letterSpacing: "5px" }}>
        •••• •••• •••• {props.number.slice(-4)}
      </div>

      {/* Bottom information */}
      <div style={{ fontSize: "25px" }}>
        <div>
          Expires {String(props.expirationMonth).padStart(2, "0")}/
          {String(props.expirationYear).slice(-2)}
          <span style={{ marginLeft: "40px" }}>{props.bank}</span>
        </div>

        <div>{props.owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;