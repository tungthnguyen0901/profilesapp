import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import DownloadPDF from "./components/DownloadFile";
import Carousel1 from "./components/Carousel";
import Testest from "./components/Heading.js";

function App() {


  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />          
          <LandingSection />  
          <Testest text= {"My Tech Stack"} id = {"TechStack-section"}/>
          <Carousel1 />
          <ProjectsSection />          
          <DownloadPDF />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
