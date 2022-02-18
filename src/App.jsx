import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center items-center">
      <div
        className="bg-neutral-900 text-white text-xl px-10 py-4 shadow-lg rounded cursor-pointer"
        onClick={toggleModal}
      >
        Toggle Modal !
      </div>

      {isOpen && (
        <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0">
          <div
            className="w-screen h-screen bg-black/70 absolute top-0 left-0"
            onClick={toggleModal}
          ></div>
          <div className="bg-gray-50 px-20 py-10 text-3xl font-medium rounded absolute shadow-lg">
            Hello World
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
