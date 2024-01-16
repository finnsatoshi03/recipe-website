import React from "react";

export default function Header(props) {
  const headerLines = props.header.split(" ");

  return (
    <>
      <header>
        <div className="container flex-col justify-center items-center py-12">
          <h1 className="font-serif text-[5rem] text-black leading-none text-center mb-4">
            {headerLines.map((line, index) => (
              <React.Fragment key={index}>
                {index === 2 && <br />}
                {line + " "}
              </React.Fragment>
            ))}
          </h1>
          <p className="font-sans text-sm text-black w-1/3 text-center mx-auto">
            {props.description}
          </p>
        </div>
      </header>
    </>
  );
}
