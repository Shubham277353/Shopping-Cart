import { Link } from "react-router";
import heroImage from "../assets/homePageBG.avif"

export default function Home() {
  return (
<div>
  <div className= " bg-cover bg-center h-96 flex min-h-[80vh] flex-col items-center justify-center text-center" style={{backgroundImage: `url(${heroImage})`}}>
    <h1 className="text-4xl font-light uppercase tracking-[0.15em] sm:text-5xl md:text-6xl lg:text-7xl lg:tracking-[0.3em]">
      daLimit
    </h1>
  
    <p className="mt-4 max-w-md px-4 text-sm text-gray-500 sm:text-base">
      Affordability never seen before.
    </p>
  
    <Link
      to="/shop"
      className="mt-8 rounded-md border border-black px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white sm:px-8 sm:text-base"
    >
      SHOP NOW
    </Link>
  </div>

</div>
  );
}
