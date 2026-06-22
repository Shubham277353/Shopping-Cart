import { Link } from "react-router"

export default function ErrorPage(){
    return(
<div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
  <h1 className="text-8xl font-extrabold text-slate-900">
    Whoops!
  </h1>

  <h2 className="mt-4 text-3xl font-semibold text-gray-700">
    Page Not Available
  </h2>

  <p className="mt-2 text-gray-500">
    The page you're looking for doesn't exist.
  </p>

  <Link
    to="/home"
    className="mt-8 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
  >
    Back to Home
  </Link>
</div>
    )
}