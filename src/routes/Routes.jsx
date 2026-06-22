import App from "../App";
import Home from "../components/HomePage";
import Shop from "../components/ShopPage";
import Cart from "../components/CartPage";
import DefaultPage from "../components/DefaultPage";
import ErrorPage from "../components/ErrorPage";
import PaymentSuccess from "../components/PaymentSuccessPage";

const Routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DefaultPage /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "success", element: <PaymentSuccess /> },
];

export default Routes;
