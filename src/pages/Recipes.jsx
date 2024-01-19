/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterCards from "../components/FilterCards";

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

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.7,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export default function Recipes() {
  const [selectedCard, setSelectedCard] = useState(FilterCardsData[0].name);

  const handleCardClick = (name) => {
    setSelectedCard(name);
  };

  return (
    <div className="container xl:m-auto lg:m-auto md:m-auto sm:m-auto">
      {/* Hero */}
      <h1 className="font-serif text-black text-3xl leading-none mb-4 xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl">
        Welcome to
        <br />
        Tito Zah&apos;s Kitchen
      </h1>
      {/* Search */}
      <div className="relative w-1/2">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border-2 border-gray bg-white h-10 px-5 pr-16 rounded-[3rem] text-sm focus:outline-none w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2.5 right-4 h-5 w-5 text-gray-500"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
        </svg>
      </div>
      {/* Filter Cards */}
      <div className="hidden sm:block">
        <div className="flex gap-5 my-10">
          {FilterCardsData.map((card, index) => (
            <FilterCards
              key={index}
              image={card.images}
              name={card.name}
              category={card.category}
              selected={card.name === selectedCard}
              onClick={() => handleCardClick(card.name)}
            />
          ))}
        </div>
      </div>
      <div className="sm:hidden">
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
      <div>
        <h2 className="font-serif text-black text-lg leading-none mb-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
          All Items
        </h2>
      </div>
    </div>
  );
}
