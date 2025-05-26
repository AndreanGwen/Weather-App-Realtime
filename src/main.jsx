import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPages from "./Pages/mainPage";
import { SearchProvider } from "./context/searchAPIContext";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={Router} />
    </SearchProvider>
  </StrictMode>
);
