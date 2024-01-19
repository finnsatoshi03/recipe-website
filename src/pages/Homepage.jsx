import { useEffect } from "react";
import Hero from "../components/Header";
import Cards from "../components/Cards";

const CardData = [
  {
    image: "images/champurado.png",
    name: "Champurado",
    calories: "224.2",
    servings: "4",
    meal: "Breakfast",
  },
  {
    image: "images/sisig.png",
    name: "Pork Sisig",
    calories: "945.5",
    servings: "4",
    meal: "Lunch",
  },
  {
    image: "images/bilo-bilo.png",
    name: "Ginataang Bilo-bilo",
    calories: "400",
    servings: "4",
    meal: "Merienda",
  },
  {
    image: "images/menudo.png",
    name: "Pork Menudo",
    calories: "450",
    servings: "4",
    meal: "Dinner",
  },
];

export default function Homepage() {
  useEffect(() => {
    const checkOverflow = () => {
      document.body.style.overflowY =
        window.innerWidth > 1530 ? "hidden" : "auto";
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      document.body.style.overflowY = "auto";
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <>
      <Hero
        header="Halo-Halong Bliss in Every Dish"
        description="Discover culinary joy at Tito Zah's Kitchen. Add, search, and enjoy recipes for breakfast, lunch, meryenda, and dinner with ease."
      />
      <div className="container flex flex-wrap justify-center gap-20 my-10 lg:justify-between md:justify-around sm:justify-around m-auto">
        {CardData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            name={card.name}
            calories={card.calories}
            servings={card.servings}
            meal={card.meal}
          />
        ))}
        <img
          className="absolute bottom-[-4.5rem] right-[-10rem] xl:h-[22rem] lg:h-[22rem] md:h-[20rem] sm:h-[17rem] h-[15rem] "
          src="images/chopping-board.png"
          alt="Chopping Board"
        />
        <img
          className="absolute xl:translate-y-[-20rem] lg:translate-y-[-20rem] translate-y-[-10rem] xl:right[-3rem] lg:right-[-3rem] right-[-2rem] xl:h-[10rem] lg:h-[10rem] md:h-[7rem] sm:h-[5rem] h-[5rem] rotate-180"
          src="images/bay-leaf.png"
          alt="Bay Leaf"
        />
        <img
          className="absolute xl:translate-y-[-7rem] lg:xl:translate-y-[-7rem] translate-y-0 right-[-3rem] h-[10rem] rotate-[100deg]"
          src="images/carrots.webp"
          alt="Julienned Carrots"
        />
        <img
          className="absolute lg:bottom-[-10rem] xl:bottom-0 bottom-0 left-[-3rem] xl:h-[10rem] lg:h-[10rem] h-20"
          src="images/onions.png"
          alt="3pcs Onions"
        />
        <img
          className="absolute translate-y-0 left-[-3rem] xl:h-[17rem] lg:h-[17rem] h-40 rotate-[190deg]"
          src="images/kangkong.png"
          alt="Kang-kong Leaves"
        />
        <img
          className="absolute xl:top-[10rem] lg:top-[10rem] top-20 left-[-5rem] xl:h-[15rem] lg:h-[15rem] h-[10rem] rotate-[180deg]"
          src="images/chilli.webp"
          alt="2pcs Chilli"
        />
      </div>
    </>
  );
}