/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";

export default function CreateRecipe({ showModal, setShowModal }) {
  const [ingredients, setIngredients] = useState([
    { id: 1, placeholder: "1/4 cup of dorans sword" },
    { id: 2, placeholder: "1 cup of vandal" },
  ]);
  const [directions, setDirections] = useState([
    { id: 1, placeholder: "Step 1" },
    { id: 2, placeholder: "Step 2" },
  ]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleCreate = () => {
    //
  };

  const inputStyle =
    "py-2 px-1 border-b-2 bg-white200 outline-none focus:border-b-green text-sm mb-2 w-full";
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
              className="h-[90%] w-[90%] bg-white200 rounded-3xl transition-all duration-500 relative"
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
                <p className="text-light text-[11px] mb-10 w-1/4">
                  Craft your culinary masterpiece effortlessly by adding your
                  favorite ingredients, step-by-step instructions, and share the
                  joy of your unique recipe creation with our community.
                </p>
                <div className="">
                  <form onSubmit={handleCreate}>
                    <div className="flex flex-col w-1/3">
                      <input
                        type="text"
                        placeholder="Recipe Title"
                        className={inputStyle}
                      />
                      <label className="mt-5 text-sm font-semibold font-sans">
                        Ingredients:
                      </label>
                      {ingredients.map((ingredient) => (
                        <div className="relative" key={ingredient.id}>
                          <input
                            type="text"
                            placeholder={ingredient.placeholder}
                            className={inputStyle}
                          />
                          {ingredient.id > 2 && (
                            <img
                              className="absolute right-0 h-5 rotate-45 top-3 cursor-pointer"
                              src="images/add.png"
                              alt="delete"
                              onClick={() => removeIngredient(ingredient.id)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addMore}
                      className="text-xs bg-gray text-white200 px-2 py-1 rounded-lg flex items-center gap-1"
                    >
                      <img className="h-4" src="images/add-alt.png" />
                      Add more
                    </button>
                    <div className="flex flex-col w-1/3">
                      <label className="mt-5 text-sm font-semibold font-sans">
                        Directions:
                      </label>
                      {directions.map((direction) => (
                        <div className="relative" key={direction.id}>
                          <input
                            type="text"
                            placeholder={direction.placeholder}
                            className={inputStyle}
                          />
                          {direction.id > 2 && (
                            <img
                              className="absolute right-0 h-5 rotate-45 top-3 cursor-pointer"
                              src="images/add.png"
                              alt="delete"
                              onClick={() => removeDirection(direction.id)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={addMoreDirection}
                      className="text-xs bg-gray text-white200 px-2 py-1 rounded-lg flex items-center gap-1"
                    >
                      <img className="h-4" src="images/add-alt.png" />
                      Add more
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
