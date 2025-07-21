import Header from "./components/header"; 
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ClassicalHomeopathySection from "./components/classicalhomeopathy";
import SpecialitySection from "./components/specialitysection";
import TreatmentsCard from "./components/treatmentscard";
import AlternativeTherapies from "./components/alternativetherapies";
import HealthPackages from "./components/healthpackages";
import BenefitsSection from "./components/benefitssection";
import WhyChooseUs from "./components/whychooseus";
import CorporateWellnessSection from "./components/corporatewellnesssection";
import PhilanthropySection from "./components/philantropysection";
import Graphs from "./components/graphs";
import PatientTestimonials from "./components/patienttestimonials";
import Faqs from "./components/faqs";
import ClientAppointmentWrapper from "./components/clientAppointmentWrapper";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
    <Header/>
     <Navbar/> 
       <Hero />
    <ClassicalHomeopathySection />
    <SpecialitySection />
    <TreatmentsCard />
    <AlternativeTherapies/>
    <HealthPackages />
    <BenefitsSection />
    <WhyChooseUs/>
    <CorporateWellnessSection />
    <PhilanthropySection />
    <Graphs/>
    <PatientTestimonials/>
    <Faqs/>
    <ClientAppointmentWrapper/>
      <Footer/>

    </>
  );
}
