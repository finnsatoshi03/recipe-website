/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Header from "../components/RecipesHeader";
import FilterCards from "../components/FilterCards";
import Filters from "../components/Filters";
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

export default function Recipes() {
  const [selectedCard, setSelectedCard] = useState(FilterCardsData[0].name);
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

  const handleCardClick = (name) => {
    setSelectedCard(name);
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
          <Header />
        </div>
      ) : (
        <Header />
      )}
      <div className="md:hidden my-10">
        <Slider {...settings}>
          {FilterCardsData.map((card, index) => (
            <div key={index}>
              <FilterCards
                image={card.images}
                name={card.name}
                category={card.category}
                selected={card.name === selectedCard}
                onClick={() => handleCardClick(card.name)}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* Header Filter */}
      <div className="flex items-center">
        <h2 className="font-serif text-black text-lg leading-none mb-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl mr-10">
          All Items
        </h2>
        {FiltersData.map((filter, index) => (
          <div className="mr-4" key={index}>
            <Filters
              filter={filter.filter}
              selected={selectedFilters.includes(filter.filter)}
              onClick={() => handleFilterClick(filter.filter)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
