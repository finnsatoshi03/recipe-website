export default function Navigation(props) {
  return (
    <>
      <div className="container flex justify-between py-6 items-center font-sans text-black">
        <p>{props.userStatus || "Guest"}</p>
        <div className="flex items-center lg:gap-24 md:gap-12 sm:gap-6 absolute left-1/2 transform -translate-x-1/2">
          <a href="#">Recipes</a>
          <img className="w-16" src="images/logo.png" alt="Tito Zah's Logo" />
          <a href="#">Contact</a>
        </div>
        <div className="flex bg-black px-3.5 py-2 rounded-lg items-center gap-1  hover:cursor-pointer">
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/doodle/48/user.png"
            alt="user"
          />
          <a href="#" className="text-white200 text-xs ">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}
