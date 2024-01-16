import Nav from "./components/Navigation";
import Hero from "./components/Header";
import Cards from "./components/Cards";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <Hero
        header="Halo-Halong Bliss in Every Dish"
        description="Discover culinary joy at Tito Zah's Kitchen. Add, search, and enjoy recipes for breakfast, lunch, meryenda, and dinner with ease."
      />
      <div className="container flex justify-between my-10">
        <Cards image={"images/champurado.png"} name={"Champurado"} />
        <Cards image={"images/sisig.png"} name={"Sisig"} />
        <Cards image={"images/bilo-bilo.png"} name={"Bilo-bilo"} />
        <Cards image={"images/menudo.png"} name={"Menudo"} />
      </div>
    </>
  );
}
