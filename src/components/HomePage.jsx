import { Link } from "react-router";
import heroImage from "../assets/homePageBG.avif"

export default function Home() {
  return (
<div>
  <div className= " bg-cover bg-center h-96 flex min-h-[80vh] flex-col items-center justify-center text-center" style={{backgroundImage: `url(${heroImage})`}}>
    <h1 className="text-7xl font-light tracking-[0.3em] uppercase">
      daLimit
    </h1>
  
    <p className="mt-6 text-gray-500">
      Affordability never seen before.
    </p>
  
    <Link
      to="/shop"
      className="mt-10 border border-black px-8 py-3 transition hover:bg-black hover:text-white"
    >
      SHOP NOW
    </Link>
  </div>

</div>
  );
}
