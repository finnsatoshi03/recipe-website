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
      <div className="container flex flex-wrap justify-center gap-20 my-10 lg:justify-between md:justify-around sm:justify-around">
        <Cards
          image={"images/champurado.png"}
          name={"Champurado"}
          calories={"224.2"}
          servings={"4"}
          meal={"Breakfast"}
        />
        <Cards
          image={"images/sisig.png"}
          name={"Pork Sisig"}
          calories={"945.5"}
          servings={"4"}
          meal={"Lunch"}
        />
        <Cards
          image={"images/bilo-bilo.png"}
          name={"Ginataang Bilo-bilo"}
          calories={"400"}
          servings={"4"}
          meal={"Merienda"}
        />
        <Cards
          image={"images/menudo.png"}
          name={"Pork Menudo"}
          calories={"450"}
          servings={"4"}
          meal={"Dinner"}
        />
      </div>
    </>
  );
}
