import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NewHero = dynamic(() => import('@/components/Hero/NewHero').then(mod => mod.NewHero), {
  loading: () => <div className="h-screen" />
});
const PhoneMockups = dynamic(() => import('@/components/PhoneMockups').then(mod => mod.PhoneMockups), {
  loading: () => <div className="h-96" />
});
const Features = dynamic(() => import('@/components/Features').then(mod => mod.default), {
  loading: () => <div className="h-96" />
});
const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => mod.default), {
  loading: () => <div className="h-96" />
});
const Pricing = dynamic(() => import('@/components/Pricing').then(mod => mod.default), {
  loading: () => <div className="h-96" />
});
const CTA = dynamic(() => import('@/components/CTA').then(mod => mod.default), {
  loading: () => <div className="h-96" />
});

const Home = () => {
	return (
		<>
			<Header />
			<NewHero />
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
