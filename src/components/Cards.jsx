/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Cards(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section>
        <div
          className="card-container bg-white w-80 h-96 rounded-3xl hover:bg-green hover:cursor-pointer transition duration-500 ease-in-out"
          style={{
            boxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
            WebkitBoxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
            MozBoxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="flex justify-center m-auto w-40 h-40 relative top-[-60px] rounded-full"
            style={{
              boxShadow: "-1px 14px 30px 9px rgba(0,0,0,0.23)",
              WebkitBoxShadow: "-1px 14px 30px 9px rgba(0,0,0,0.23)",
              MozBoxShadow: "-1px 14px 30px 9px rgba(0,0,0,0.23)",
            }}
            src={props.image}
            alt={props.name}
          />
          <div className="px-12">
            <p className="font-semibold text-center text-2xl w-10/12 m-auto">
              {props.name}
            </p>
            <div className="line flex justify-center m-auto mt-4 mb-2 w-56 h-[1px] bg-green "></div>
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
            <div className="line flex justify-center m-auto mt-4 mb-2 w-56 h-[1px] bg-green "></div>
            <div className="flex justify-between my-5">
              <p className="text-xl">{props.meal}</p>
              <a
                href="#"
                className="img-bg bg-green items-center p-1 rounded-lg "
              >
                <img
                  src={isHovered ? "images/view-alt.png" : "images/view.png"}
                  alt="view"
                  className="w-[18px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
