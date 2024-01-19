/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Cards(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section>
        <div
          className="card-container relative bg-white200 rounded-3xl  hover:bg-green hover:cursor-pointer transition duration-500 ease-in-out xl:w-80 xl:h-96 lg:w-72 lg:h-80 md:w-64 md:h-72 sm:w-60 sm:h-64 w-56 h-60 z-10 "
          style={{
            boxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
            WebkitBoxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
            MozBoxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="flex justify-center m-auto relative top-[-60px] rounded-full xl:h-40 xl:w-40 lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 w-28 h-28"
            style={{
              boxShadow: "-1px 14px 30px 9px rgba(0,0,0,0.23)",
              WebkitBoxShadow: "-1px 14px 30px 9px rgba(0,0,0,0.23)",
              MozBoxShadow: "-1px 14px 30px 9px rgba(0,0,0,0.23)",
            }}
            src={props.image}
            alt={props.name}
          />
          <div
            className={`px-12 ${
              props.name.includes("\n")
                ? "xl:translate-y-[-35px] lg:translate-y-[-45px] md:translate-y-[-55px] sm:translate-y-[-65px] translate-y-[-75px]"
                : "xl:translate-y-[-20px] lg:translate-y-[-30px] md:translate-y-[-40px] sm:translate-y-[-50px] translate-y-[-60px]"
            }`}
          >
            <p className="font-semibold text-center text-md w-10/12 m-auto xl:2xl lg:text-2xl md:text-xl sm:text-lg">
              {props.name}
            </p>
            <div className="line flex justify-center m-auto mt-4 mb-2 w-[125px] h-[1px] bg-green xl:w-[225px] lg:w-[195px] md:w-[165px] sm:w-[145px]"></div>
            <div className="flex justify-between items-center ">
              <p className="text-xs text-black">
                {props.calories}
                {" calories"}
              </p>
              <p className="text-green">•</p>
              <p className="text-xs text-black">
                {props.servings}
                {" persons"}
              </p>
            </div>
            <div className="line flex justify-center m-auto mt-4 mb-2 w-[125px] h-[1px] bg-green xl:w-[225px] lg:w-[195px] md:w-[165px] sm:w-[145px]"></div>
            <div className="flex justify-between xl:my-5 lg:my-4 md:my-3 sm:2 my-1">
              <p className="text-sm xl:text-xl lg:text-xl md:text-lg sm:text-md">
                {props.meal}
              </p>
              <a
                href="#"
                className="img-bg bg-green items-center p-1 rounded-lg "
              >
                <img
                  src={isHovered ? "images/view-alt.png" : "images/view.png"}
                  alt="view"
                  className="xl:w-[18px] lg:w-[18px] md:w-[16px] sm:w-[14px] w-[12px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
