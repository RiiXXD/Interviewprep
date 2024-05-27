import React, { useState } from "react";
import Modal from "./Modal";

// function Main() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={openModal}>Open Modal</button>
//       </header>
//       <Modal show={isModalOpen} onClose={closeModal}>
//         <h2>Modal Content</h2>
//         <p>
//           This is an example modal. Click outside or press the close button to
//           close it.
//         </p>
//       </Modal>
//     </div>
//   );
// }

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    console.log("closeModal");
  };
  return (
    <div>
      <header className="App-header" style={{ margin: "20px 0" }}>
        <button onClick={openModal}>Open Modal</button>
      </header>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <h1>Modal </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In accusamus
          distinctio perferendis excepturi deleniti voluptatum quae earum
          facilis, optio iste cupiditate doloremque, provident tenetur ratione
          rem autem deserunt facere a! Fugit, eligendi! Sed facere aperiam ullam
          nulla, labore cupiditate, veniam odit corporis est harum facilis
          optio, consequuntur explicabo. Laborum dolore suscipit fugiat iure
          fuga quidem nihil beatae ducimus cum deserunt?
        </p>
      </Modal>
    </div>
  );
};

export default Main;
