import AboutVideo from "../components/home/AboutVideo";
import Brand from "../components/home/Brand";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import Order from "../components/home/Order";
import Questions from "../components/home/Questions";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Order />
      <AboutVideo />
      <Brand />
      <Testimonials />
      <Questions />
    </>
  );
}

export default Home;
