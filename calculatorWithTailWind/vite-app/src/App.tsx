import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/MainRouter";

export const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};
