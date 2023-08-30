import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Hero />
      <div className="w-full mx-auto mb-8">
        <AboutMe />
        <hr className="mx-auto bg-black dark:bg-white w-1/2"></hr>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
