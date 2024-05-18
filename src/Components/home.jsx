import { Link } from "react-router-dom";

export function Home() {
  return (
    <button>
      <Link to="/emoji-survey">Click to Start</Link>
    </button>
  );
}
