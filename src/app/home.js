import Header from "./components/header"; 
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SpecialitySection from "./components/specialitysection";
import Services from "./components/services";
import WhyChooseUs from "./components/whychooseus";
import Therapies from "./components/therapies";
import Graphs from "./components/graphs";
import HomeopathyFundamentals from "./components/homeopathy";
import HomeopathyFactsMyths from "./components/homeopathyfactsmyths";
import PatientTestimonials from "./components/patienttestimonials";
import Faqs from "./components/faqs";
import ClientAppointmentWrapper from "./components/clientAppointmentWrapper";
import Schedule from "./components/schedule";
import PrivacyPolicy from "./components/privacypolicy";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
    <Header/>
     <Navbar/> 
       <Hero />
    <SpecialitySection />
      <Services/>
    <WhyChooseUs/>
    <Therapies />
    <Graphs/>
    <HomeopathyFundamentals />
    <HomeopathyFactsMyths />
    <PatientTestimonials/>
    <Faqs/>
    <ClientAppointmentWrapper/>
    <Schedule/>
    <PrivacyPolicy/>
      <Footer/>

    </>
  );
}
