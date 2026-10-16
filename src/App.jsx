import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/section/Hero";
import Lista from "./components/section/Lista";
import Programma from "./components/section/Programma";
import Contatti from "./components/section/Contatti";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Lista />
        <Programma />
        <Contatti />
      </main>
    </>
  );
}

export default App;
