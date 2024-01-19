/* eslint-disable react/prop-types */
import { useEffect, useRef, useCallback, useState } from "react";

export default function RecipeContent({ showModal, setShowModal }) {
  const modalRef = useRef();
  const [modalSize, setModalSize] = useState(50); // Start at half size
  const [isFullSize, setIsFullSize] = useState(false);

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
    setIsFullSize(scrollPercent === 100);
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

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div
            className="modal bg-black bg-opacity-50 w-full h-full absolute flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              ref={modalRef}
              className="modal-content bg-white200 rounded-lg transition-all duration-500"
              style={{
                width: `${modalSize}%`,
                height: `${modalSize}%`,
                overflowY: isFullSize ? "auto" : "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Modal Content</h2>
              <p>This is the content of the modal.</p>
              <button onClick={closeModal} className="translate-y-[rem]">
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
