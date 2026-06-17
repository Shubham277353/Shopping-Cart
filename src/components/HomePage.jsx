import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>daLimit</h1>
      <p>Luxury never seen before.</p>
      <Link to="/shop">Browse</Link>
    </div>
  );
}
