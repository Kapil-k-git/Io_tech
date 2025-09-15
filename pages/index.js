import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>IO-TECH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="mx-auto">
        <Hero />
        <Card title="Analytics" subtitle="Real-time insights" />
        <Testimonial />
        <div className="h-10"></div>
        <Footer />
      </main>
    </div>
  );
}
