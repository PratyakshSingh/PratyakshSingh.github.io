import Header from "./Components/Header";
import SkillsSection from "./Components/SkillsSection";
import HomeSection from "./Components/HomeSection";
import ProjectSection from "./Components/ProjectSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative">
      <div className="fixed -z-50 top-20 left-2 w-96 h-96 bg-blue-100 mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="fixed -z-50 top-40 left-10 w-96 h-96 bg-blue-100 mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="fixed -z-50 top-40 -right-10 w-96 h-96 rounded-full bg-blue-100 mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="fixed -z-50 top-40 -right-20 w-96 h-96 rounded-full bg-blue-100 mix-blend-multiply opacity-70 animate-blob"></div>
      <Header />
      <div className="min-h-screen container mx-auto px-8">
        <HomeSection />
        <SkillsSection />
        <ProjectSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
