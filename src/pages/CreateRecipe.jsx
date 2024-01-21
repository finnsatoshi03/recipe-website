/* eslint-disable react/prop-types */
import { useState, useCallback, useRef, useEffect } from "react";

export default function CreateRecipe({ showModal, setShowModal }) {
  const [ingredients, setIngredients] = useState([
    { id: 1, placeholder: "1/4 cup of dorans sword" },
    { id: 2, placeholder: "1 cup of vandal" },
  ]);
  const [directions, setDirections] = useState([
    { id: 1, placeholder: "Step 1" },
    { id: 2, placeholder: "Step 2" },
  ]);
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [mealType, setMealType] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [prepUnit, setPrepUnit] = useState("mins");
  const [cookTime, setCookTime] = useState(0);
  const [cookUnit, setCookUnit] = useState("mins");
  const [totalTime, setTotalTime] = useState(0);
  const [totalUnit, setTotalUnit] = useState("mins");
  const prepInputRef = useRef();
  const cookInputRef = useRef();

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleCreate = () => {
    //
  };

  const inputStyle = "bg-gray200 outline-none text-sm md:w-[16.5rem] w-1/3";

  useEffect(() => {
    if (prepInputRef.current) {
      prepInputRef.current.style.width = `${prepInputRef.current.placeholder.length}ch`;
    }
    if (cookInputRef.current) {
      cookInputRef.current.style.width = `${cookInputRef.current.placeholder.length}ch`;
    }
  }, []);

  useEffect(() => {
    const totalMins =
      (prepUnit === "hrs" ? prepTime * 60 : prepTime) +
      (cookUnit === "hrs" ? cookTime * 60 : cookTime);
    if (totalMins >= 60) {
      setTotalTime(totalMins / 60);
      setTotalUnit("hrs");
    } else {
      setTotalTime(totalMins);
      setTotalUnit("mins");
    }
  }, [prepTime, prepUnit, cookTime, cookUnit]);

  const handleInputChange = (e, setTime, setUnit, inputRef) => {
    let value = parseInt(e.target.value, 10);
    if (value >= 60) {
      setUnit("hrs");
      value = Math.min(value / 60, 24);
      value = value % 1 === 0 ? value : value.toFixed(2);
    } else {
      setUnit("mins");
      value = Math.min(value, 60);
    }
    e.target.value = value;
    setTime(value);
    inputRef.current.style.width = `${Math.max(
      inputRef.current.value.toString().length,
      inputRef.current.placeholder.length
    )}ch`;
  };

  const addMore = (e) => {
    e.preventDefault();
    setIngredients([
      ...ingredients,
      { id: Date.now(), placeholder: "Enter new ingredient" },
    ]);
  };
  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const addMoreDirection = (e) => {
    e.preventDefault();
    setDirections([
      ...directions,
      { id: Date.now(), placeholder: "Enter new step" },
    ]);
  };
  const removeDirection = (id) => {
    setDirections(directions.filter((direction) => direction.id !== id));
  };

  const toggleMealType = (type) => {
    if (type === "Breakfast" || type === "Merienda") {
      setMealType((prev) => (prev === type ? "" : type));
    } else {
      setMealType((prev) => {
        if (prev === "Lunch" || prev === "Dinner") {
          return prev.includes(type)
            ? prev.replace(type, "")
            : `${prev}, ${type}`;
        } else {
          return type;
        }
      });
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-20"
          onClick={closeModal}
        >
          <div className="modal bg-black bg-opacity-50 w-full h-full absolute flex items-center justify-center">
            {/* Modal Content */}
            <div
              className="h-[90%] w-[90%] bg-white200 rounded-3xl transition-all duration-500 relative overflow-y-auto"
              onClick={stopPropagation}
            >
              {/* Back */}
              <img
                className="absolute top-5 left-5 hover:cursor-pointer"
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/back--v1.png"
                alt="back--v1"
                onClick={closeModal}
              />
              <div className="py-24 px-32">
                <h1 className="text-3xl font-light">Create</h1>
                <h2 className="text-[50px] font-serif leading-9 mb-5 text-green">
                  Recipe
                </h2>
                <p className="text-light text-[11px] mb-10 sm:w-[24rem] w:[15rem]">
                  Craft your culinary masterpiece effortlessly by adding your
                  favorite ingredients, step-by-step instructions, and share the
                  joy of your unique recipe creation with our community.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* Input forms */}
                  <form onSubmit={handleCreate}>
                    <div className="flex flex-col gap-2">
                      <div
                        className={`flex items-center gap-4 px-3 py-2 rounded-xl ${
                          title.length >= 3
                            ? "bg-gray text-white200"
                            : "bg-gray200"
                        }`}
                      >
                        <img
                          width="20"
                          height="20"
                          src={
                            title.length >= 3
                              ? "https://img.icons8.com/ios-glyphs/30/f3f3f5/type--v1.png"
                              : "https://img.icons8.com/ios-glyphs/30/607917/type--v1.png"
                          }
                          alt="type--v1"
                        />
                        <label className="text-sm font-sans w-1/3">
                          Recipe Title:
                        </label>
                        <input
                          type="text"
                          placeholder="Your Sample Title"
                          className={`${
                            title.length >= 3 ? "bg-gray" : "bg-gray200"
                          } outline-none text-sm md:w-[15rem] w-1/2`}
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="bg-gray200 px-3 py-2 rounded-xl">
                        <div className="flex items-center gap-4">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios-glyphs/30/607917/ingredients--v2.png"
                            alt="ingredients--v2"
                          />
                          <label className="text-sm font-sans">
                            Ingredients:
                          </label>
                        </div>
                        {ingredients.map((ingredient) => (
                          <div className="relative my-1" key={ingredient.id}>
                            <input
                              type="text"
                              placeholder={ingredient.placeholder}
                              className={`${inputStyle} w-full`}
                            />
                            {ingredient.id > 2 && (
                              <img
                                className="absolute right-0 md:h-5 h-4 rotate-45 top-3 cursor-pointer"
                                src="images/add.png"
                                alt="delete"
                                onClick={() => removeIngredient(ingredient.id)}
                              />
                            )}
                          </div>
                        ))}
                        <button
                          onClick={addMore}
                          className="text-xs bg-gray text-white200 px-2 py-1 mt-2 rounded-lg flex items-center gap-1"
                        >
                          <img className="h-4" src="images/add-alt.png" />
                          Add more
                        </button>
                      </div>
                      <div className="bg-gray200 px-3 py-2 rounded-xl">
                        <div className="flex items-center gap-4">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios-glyphs/30/607917/wakeup-hill-on-stairs.png"
                            alt="wakeup-hill-on-stairs"
                          />
                          <label className="text-sm ">Directions:</label>
                        </div>
                        {directions.map((direction) => (
                          <div className="relative my-1" key={direction.id}>
                            <input
                              type="text"
                              placeholder={direction.placeholder}
                              className={`${inputStyle} w-full`}
                            />
                            {direction.id > 2 && (
                              <img
                                className="absolute right-0 md:h-5 h-4 rotate-45 top-3 cursor-pointer"
                                src="images/add.png"
                                alt="delete"
                                onClick={() => removeDirection(direction.id)}
                              />
                            )}
                          </div>
                        ))}
                        <button
                          onClick={addMoreDirection}
                          className="text-xs bg-gray text-white200 px-2 py-1 mt-2 rounded-lg flex items-center gap-1"
                        >
                          <img className="h-4" src="images/add-alt.png" />
                          Add more
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* RecipeHeadNotes */}
                  <div className="flex flex-col gap-2 md:w-auto w-full">
                    {/* Calories */}
                    <div className="flex gap-4 bg-gray200 px-3 py-2 rounded-xl">
                      <div className="flex items-center gap-4">
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/ios-glyphs/30/607917/celery.png"
                          alt="celery"
                        />
                        <label className="text-sm w-1/3">Calories:</label>
                      </div>
                      <input
                        type="number"
                        placeholder="100"
                        className={inputStyle}
                        pattern="\d*"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                      />
                    </div>
                    {/* Serving */}
                    <div className="flex gap-4 bg-gray200 px-3 py-2 rounded-xl">
                      <div className="flex items-center gap-4">
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/material-sharp/24/607917/tableware.png"
                          alt="tableware"
                        />
                        <label className="text-sm">Serving:</label>
                      </div>
                      <input
                        type="number"
                        placeholder="3"
                        className={inputStyle}
                        pattern="\d*"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                      />
                    </div>
                    {/* HeadNotes */}
                    <div className="flex flex-col gap-4 bg-gray200 rounded-xl px-3 py-2">
                      {/* Difficulty */}
                      <div className="flex sm:flex-row flex-col md:gap-4 gap-1 md:items-center items-start">
                        <div className="flex items-center gap-4">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/ios-glyphs/30/607917/tasks--v1.png"
                            alt="tasks--v1"
                          />
                          <label className="text-sm">Difficulty:</label>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:ml-0 ml-8">
                          <p
                            className={`text-xs py-1 px-2 ${
                              difficulty === "" || difficulty === "Easy"
                                ? "bg-green200"
                                : "bg-gray opacity-40"
                            } rounded-lg hover:cursor-pointer bg-opacity-50`}
                            onClick={() =>
                              setDifficulty(difficulty === "Easy" ? "" : "Easy")
                            }
                          >
                            Easy
                          </p>
                          <p
                            className={`text-xs py-1 px-2 ${
                              difficulty === "" || difficulty === "Medium"
                                ? "bg-yellow"
                                : "bg-gray opacity-40"
                            } rounded-lg hover:cursor-pointer bg-opacity-50`}
                            onClick={() =>
                              setDifficulty(
                                difficulty === "Medium" ? "" : "Medium"
                              )
                            }
                          >
                            Medium
                          </p>
                          <p
                            className={`text-xs py-1 px-2 ${
                              difficulty === "" || difficulty === "Hard"
                                ? "bg-red"
                                : "bg-gray opacity-40"
                            } rounded-lg hover:cursor-pointer bg-opacity-50`}
                            onClick={() =>
                              setDifficulty(difficulty === "Hard" ? "" : "Hard")
                            }
                          >
                            Hard
                          </p>
                        </div>
                      </div>
                      {/* Meal Type */}
                      <div className="flex sm:flex-row flex-col md:gap-4 gap-1 md:items-center items-start">
                        <div className="flex items-center gap-4">
                          <img
                            width="24"
                            height="24"
                            src="https://img.icons8.com/ios-glyphs/30/607917/meal.png"
                            alt="meal"
                          />
                          <label className="text-sm">Meal:</label>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:ml-0 ml-8">
                          <p
                            className={`text-xs px-2 py-1 ${
                              mealType === "" || mealType === "Breakfast"
                                ? "bg-green"
                                : "bg-gray opacity-40"
                            } rounded-lg hover:cursor-pointer bg-opacity-50`}
                            onClick={() => toggleMealType("Breakfast")}
                          >
                            Breakfast
                          </p>
                          <p
                            className={`text-xs px-2 py-1 ${
                              mealType.length === 0 ||
                              mealType.includes("Lunch")
                                ? "bg-green"
                                : "bg-gray opacity-40"
                            } rounded-lg hover:cursor-pointer bg-opacity-50`}
                            onClick={() => toggleMealType("Lunch")}
                          >
                            Lunch
                          </p>
                          <p
                            className={`text-xs px-2 py-1 ${
                              mealType === "" || mealType === "Merienda"
                                ? "bg-green"
                                : "bg-gray opacity-40"
                            } rounded-lg hover:cursor-pointer bg-opacity-50`}
                            onClick={() => toggleMealType("Merienda")}
                          >
                            Merienda
                          </p>
                          <p
                            className={`text-xs px-2 py-1 ${
                              mealType.length === 0 ||
                              mealType.includes("Dinner")
                                ? "bg-green"
                                : "bg-gray opacity-40"
                            } rounded-lg hover:cursor-pointer bg-opacity-50`}
                            onClick={() => toggleMealType("Dinner")}
                          >
                            Dinner
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Total Time */}
                    <div className="flex flex-col bg-gray200 rounded-xl px-3 py-2">
                      <div className="flex items-center gap-4 mb-2">
                        <img
                          width="20"
                          height="20"
                          src="https://img.icons8.com/ios-glyphs/30/607917/delivery-time.png"
                          alt="delivery-time"
                        />
                        <div className="flex items-center gap-2">
                          <label className="text-sm">Total Time:</label>
                          <p className="text-sm font-bold">{totalTime}</p>
                          <p className="text-xs">{totalUnit}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 ml-9">
                        <label className="text-sm">Preparation:</label>
                        <input
                          type="number"
                          placeholder="30"
                          className={`${inputStyle} text-gray`}
                          pattern="\d*"
                          ref={prepInputRef}
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                          }}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              setPrepTime,
                              setPrepUnit,
                              prepInputRef
                            )
                          }
                        />
                        <p className="text-xs">{prepUnit}.</p>
                      </div>
                      <div className="flex items-center gap-4 ml-9">
                        <label className="text-sm">Cooking:</label>
                        <input
                          type="number"
                          placeholder="30"
                          className={`${inputStyle} text-gray`}
                          pattern="\d*"
                          ref={cookInputRef}
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                          }}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              setCookTime,
                              setCookUnit,
                              cookInputRef
                            )
                          }
                        />
                        <p className="text-xs">{cookUnit}.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
