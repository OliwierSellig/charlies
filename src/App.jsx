import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/global/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/global/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogView from "./components/blog/BlogView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BlogProvider } from "./context/BlogContext";
import ScrollToTop from "./services/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <BlogProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogView />} />
            </Route>
            <Route element={<AppLayout staticHeader={true} />}>
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BlogProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
