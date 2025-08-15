import Header from "./web/components/header"; 
import Navbar from "./web/components/navbar";
import Hero from "./web/components/hero";
import ClassicalHomeopathySection from "./web/components/classicalhomeopathy";
import SpecialitySection from "./web/components/specialitysection";
import TreatmentsCard from "./web/components/treatmentscard";
import AlternativeTherapies from "./web/components/alternativetherapies";
import HealthPackages from "./web/components/healthpackages";
import BenefitsSection from "./web/components/benefitssection";
import WhyChooseUs from "./web/components/whychooseus";
import CorporateWellnessSection from "./web/components/corporatewellnesssection";
import PhilanthropySection from "./web/components/philantropysection";
import Graphs from "./web/components/graphs";
import PatientTestimonials from "./web/components/patienttestimonials";
import Faqs from "./web/components/faqs";
import ClientAppointmentWrapper from "./web/components/clientAppointmentWrapper";
import Footer from "./web/components/footer";


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
    {/* <ClientAppointmentWrapper/> */}
      <Footer/>

    </>
  );
}
