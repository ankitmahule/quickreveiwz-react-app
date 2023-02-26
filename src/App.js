import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

export default appRouter;
