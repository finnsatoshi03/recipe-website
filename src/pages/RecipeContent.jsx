/* eslint-disable react/prop-types */
import { useEffect, useRef, useCallback } from "react";

export default function RecipeContent({ showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
              className="modal-content bg-white200 rounded-lg p-8 m-4 max-w-xs mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Modal Content</h2>
              <p>This is the content of the modal.</p>
              <button onClick={closeModal}>Close Modal</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
