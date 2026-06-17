import App from "../App";
import Home from "../components/HomePage";
import Shop from "../components/ShopPage";
import Cart from "../components/CartPage";
import DefaultPage from "../components/DefaultPage";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <DefaultPage /> },
      { path: "/home", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
];

export default Routes;
