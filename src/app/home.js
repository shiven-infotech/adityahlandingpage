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
    <ClassicalHomeopathySection />
    <SpecialitySection />
    <TreatmentsCard />
    <AlternativeTherapies/>
    <HealthPackages />
    <BenefitsSection />
    <WhyChooseUs/>
    <CorporateWellnessSection />
    <PhilanthropySection />
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
