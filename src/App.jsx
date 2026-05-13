import { Articles } from "./components/Articles";
import { Benefits } from "./components/Benefits";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export const App = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="font-public-sans">
        <Header />
        <Hero />
        <Benefits />
        <Articles />
        <Footer />
      </div>
    </main>
  );
};

export default App;
