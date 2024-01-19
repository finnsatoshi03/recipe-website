/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Header from "../components/RecipesHeader";
import FilterCards from "../components/FilterCards";
import Filters from "../components/Filters";
import Cards from "../components/Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const FilterCardsData = [
  {
    images: "images/filipino-food.png",
    name: "Filipino Foods | All",
    category: "All",
  },
  {
    images: "images/tapsilog.png",
    name: "Tapsilog | Breakfast",
    category: "Breakfast",
  },
  {
    images: "images/sinigang.png",
    name: "Sinigang | Lunch",
    category: "Lunch",
  },
  {
    images: "images/bilo-bilo.png",
    name: "Bilo-bilo | Merienda",
    category: "Merienda",
  },
  {
    images: "images/pork-bistek.png",
    name: "Pork Bistek | Dinner",
    category: "Dinner",
  },
];

const FiltersData = [
  {
    filter: "Calories",
  },
  {
    filter: "Difficulty",
  },
];

const CardsData = [
  {
    image: "images/champurado.png",
    name: "Champurado",
    calories: 300,
    serving: 1,
    meal: "Breakfast",
  },
  {
    image: "images/tapsilog.png",
    name: "Tapsilog",
    calories: 500,
    serving: 1,
    meal: "Breakfast",
  },
  {
    image: "images/sinigang.png",
    name: "Sinigang",
    calories: 400,
    serving: 1,
    meal: "Lunch",
  },
  {
    image: "images/bilo-bilo.png",
    name: "Bilo-bilo",
    calories: 200,
    serving: 1,
    meal: "Merienda",
  },
  {
    image: "images/pork-bistek.png",
    name: "Pork Bistek",
    calories: 600,
    serving: 1,
    meal: "Dinner",
  },
];

export default function Recipes() {
  const [selectedCard, setSelectedCard] = useState(FilterCardsData[0].category);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth / 185,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: windowWidth / 185,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: windowWidth / 185,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: windowWidth / 185,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const handleCardClick = (category) => {
    console.log("handleCardClick called with category:", category);
    setSelectedCard(category);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1536px)" });

  return (
    <div className="container sm:m-auto">
      {isDesktopOrLaptop ? (
        <div className="flex justify-between items-center">
          <Header setSelectedCard={setSelectedCard} />
        </div>
      ) : (
        <Header setSelectedCard={setSelectedCard} />
      )}
      <div className="md:hidden my-10">
        <Slider {...settings}>
          {FilterCardsData.map((card, index) => (
            <div key={index}>
              <FilterCards
                image={card.images}
                name={card.name}
                category={card.category}
                selected={card.category === selectedCard}
                onClick={() => handleCardClick(card.category)}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Header Filter */}
      <div className="flex items-center">
        <h2 className="font-serif text-black text-lg leading-none xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl mr-10">
          All Items
        </h2>
        {FiltersData.map((filter, index) => (
          <div className="mr-4 self-end" key={index}>
            <Filters
              filter={filter.filter}
              selected={selectedFilters.includes(filter.filter)}
              onClick={() => handleFilterClick(filter.filter)}
            />
          </div>
        ))}
      </div>
      {/* Cards */}
      <div className="flex flex-wrap justify-between gap-20 my-24">
        {CardsData.filter(
          (card) => selectedCard === "All" || card.meal === selectedCard
        ).map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            name={card.name}
            calories={card.calories}
            serving={card.serving}
            meal={card.meal}
          />
        ))}
      </div>
    </div>
  );
}
