export default function Cards(props) {
  return (
    <>
      <section>
        <div
          className="bg-white w-80 h-96 rounded-3xl hover:bg-green hover:cursor-pointer transition duration-500 ease-in-out"
          style={{
            boxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
            WebkitBoxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
            MozBoxShadow: "10px 10px 57px 2px rgba(0,0,0,0.23)",
          }}
        >
          <img
            className="flex justify-center m-auto w-40 h-40 relative top-[-60px]"
            src={props.image}
            alt={props.name}
          />
        </div>
      </section>
    </>
  );
}
