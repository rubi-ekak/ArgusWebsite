import "./App.css";
import About from "./Components/About";
import Companies from "./Components/Companies";
import CustomerSay from "./Components/CustomerSay";
import CustomerService from "./Components/CustomerService";
import Dataanalysis from "./Components/Dataanalysis";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import MarketingTeam from "./Components/MarketingTeam";
import Navbar from "./Components/Navbar";
import Wisedecision from "./Components/Wisedecision";

function App() {
  return (
    <div>
    
      <About />
      <Companies />
      <Feature />
      <Dataanalysis />
      <CustomerService />
      <MarketingTeam />
      <CustomerSay />
      <Wisedecision />
      <Footer />
    </div>
  );
}

export default App;
