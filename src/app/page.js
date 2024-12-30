import Navbar from "@/Components/Navbar/navbar";
import HeroSection from "@/Components/Header/header";
import Footer from "@/Components/Footer/footer";
import MainHome from "@/Components/Home/home";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <MainHome/>
      <Footer/>
    </div>
  );
}
