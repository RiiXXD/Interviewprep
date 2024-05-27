import React, { useState, useEffect, useRef } from "react";
import "./Modal.css";

// export default function Modal({ isModalOpen, closeModal, children }) {
//   // const modalRef = useRef(null);

//   const handleCloseClick = (e) => {
//     // if (modalRef.current && !modalRef.current.contains(e.target)) {
//     closeModal();
//     // }
//   };

//   useEffect(() => {
//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleCloseClick);
//     } else {
//       document.removeEventListener("mousedown", handleCloseClick);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleCloseClick);
//     };
//   }, [isModalOpen]);

//   if (!isModalOpen) {
//     return null;
//   }

//   return (
//     <div className="modal-backdrop">
//       <div className="modal-content">
//         <button className="close-button" onClick={closeModal}>
//           ×
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// }

export default function Modal({ isModalOpen, closeModal, children }) {
  const modalRef = useRef(null);
  const handleCloseClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleCloseClick);
    } else {
      document.removeEventListener("mousedown", handleCloseClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleCloseClick);
    };
  }, [isModalOpen]);
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className="modal-backdrop">
      <div className="modal-content" ref={modalRef}>
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}
