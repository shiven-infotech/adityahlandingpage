import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import WhyChooseUs from "./components/whychooseus";
import Therapies from "./components/therapies";
import Graphs from "./components/graphs";
import HomeopathyFundamentals from "./components/homeopathy";
import HomeopathyFactsMyths from "./components/homeopathyfactsmyths";
import PatientTestimonials from "./components/patienttestimonials";
import Faqs from "./components/faqs";
import AppointmentForm from "./components/appointment";
import Schedule from "./components/schedule";
import PrivacyPolicy from "./components/privacypolicy";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
      <Services/>
    <WhyChooseUs/>
    <Therapies />
    <Graphs/>
    <HomeopathyFundamentals />
    <HomeopathyFactsMyths />
    <PatientTestimonials/>
    <Faqs/>
    <AppointmentForm/>
    <Schedule/>
    <PrivacyPolicy/>
      <Footer/>

    </>
  );
}
