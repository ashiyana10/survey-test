export const Star = ({ filled, onClick }) => (
    <button
      style={{
        backgroundColor: "#fff",
        border: 0,
        cursor: "pointer",
        color: filled ? "gold" : "gray",
        fontSize: "24px",
      }}
      onClick={onClick}
    >
      {filled ? "★" : "☆"}
    </button>
  );