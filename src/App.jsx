import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/global/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/global/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route element={<AppLayout staticHeader={true} />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
