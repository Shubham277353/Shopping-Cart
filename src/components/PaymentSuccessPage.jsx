import { Link } from "react-router";

export default function PaymentSuccess(){
return (
  <div className="flex min-h-[80vh] items-center justify-center px-4">
    <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
      <div className="mb-4 text-6xl">✅</div>

      <h1 className="mb-2 text-3xl font-bold text-green-600">
        Payment Successful!
      </h1>

      <p className="mb-6 text-gray-600">
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <Link
        to="/shop"
        className="inline-block rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
      >
        Continue Shopping
      </Link>
    </div>
  </div>
);
}