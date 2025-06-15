import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import { PhoneMockups } from "@/components/PhoneMockups";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<PhoneMockups />
			<Features />
      <Testimonials />
      <Pricing />
      <CTA />
			<Footer />
		</>
  	);
};

export default Home;
