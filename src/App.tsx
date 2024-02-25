import "./global.scss";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import HomePage from "./pages/HomePage/HomePage";
import DetailCharacter from "./pages/DetailPage/DetailCharacter";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
      <Route path="/" errorElement={<ErrorPage />} element={<HomePage />} />
      <Route
        path="/detailCharacter/:id"
        errorElement={<ErrorPage />}
        element={<DetailCharacter />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
