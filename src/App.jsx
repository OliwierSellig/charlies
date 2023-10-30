import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "./context/BlogContext";
import { OrdersProvider } from "./context/OrdersContext";
import { SummaryProvider } from "./context/SummaryContext";
import { CartProvider } from "./context/CartContext";
import { ScrollToTop } from "./services/helpers";
import AppLayout from "./components/global/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./components/global/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogView from "./components/blog/BlogView";
import ChoosePackage from "./components/packages/choose/ChoosePackage";
import CreatePackage from "./components/packages/create/CreatePackage";
import Packages from "./pages/Packages";
import Additions from "./components/packages/additions/Additions";
import Summary from "./components/packages/summary/Summary";
import Succes from "./components/packages/succes/Succes";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <OrdersProvider>
          <SummaryProvider>
            <CartProvider>
              <BlogProvider>
                <Routes>
                  <Route element={<AppLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogView />} />
                    <Route path="/packages" element={<Packages />}>
                      <Route index element={<ChoosePackage />} />
                      <Route
                        path="create-package"
                        element={<CreatePackage />}
                      />
                      <Route
                        path="create-package/additions"
                        element={<Additions />}
                      />
                      <Route
                        path="create-package/additions/summary"
                        element={<Summary />}
                      />{" "}
                      <Route
                        path="create-package/additions/summary/succes"
                        element={<Succes />}
                      />
                    </Route>
                  </Route>
                  <Route element={<AppLayout staticHeader={true} />}>
                    <Route path="/contact" element={<Contact />} />
                  </Route>
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </BlogProvider>
            </CartProvider>
          </SummaryProvider>
        </OrdersProvider>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          className: "toast",
          success: { duration: 3000, pouseOnHover: true },
          error: { duration: 5000 },
          style: {
            fontSize: "2.2rem",
            fontFamily: "Nunito Sans",
            maxWidth: "500px",
            widows: "70%",
            padding: "2.4rem 3.6rem",
            backgroundColor: "var(--color-primary-black)",
            color: "var(--color-primary-white)",
          },
          iconTheme: {
            primary: "var(--color-primary-yellow)",
            secondary: "#fff",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
