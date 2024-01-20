/* eslint-disable react/prop-types */
import { useEffect, useRef, useCallback, useState } from "react";

export default function RecipeContent({ showModal, setShowModal, isHomePage }) {
  const modalRef = useRef();
  const [modalSize, setModalSize] = useState(isHomePage ? 100 : 50);
  const [isFullSize, setIsFullSize] = useState(isHomePage);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const totalScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(
      (scrollY / totalScrollHeight) * 50 + 50,
      100
    );
    setModalSize(scrollPercent);
    setIsFullSize(scrollPercent >= 99.5 && scrollPercent <= 100);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeModal]);
  console.log(modalSize);
  console.log(isFullSize);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div
            className="modal bg-black bg-opacity-50 w-full h-full absolute flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Modal Content */}
            <div
              ref={modalRef}
              className="modal-content bg-white200 rounded-lg transition-all duration-500 relative overflow-x-hidden"
              style={{
                width: `${modalSize}%`,
                height: `${modalSize}%`,
                overflowY: isFullSize ? "auto" : "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className={`${
                  isFullSize ? "fixed" : "absolute"
                } xl:right-0 lg:right-[-5rem] md:right-[-10rem] sm:right-[-11rem] right-[-10rem] transition-all duration-500 h-full`}
                src="images/side-element.png"
                alt="Side Element"
              />
              <div className="mx-20 my-14">
                <h2>Modal Content</h2>
                <p>This is the content of the modal.</p>
              </div>
              <button onClick={closeModal} className="translate-y-[100rem]">
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
