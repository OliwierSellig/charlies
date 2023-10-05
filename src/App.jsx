import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/global/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/global/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
