import React, { useEffect, useState } from "react";

const ModalAdd = ({ isOpen, close, children }) => {
  const [modalOpacity, setModalOpacity] = useState(0);
  const [render, setRender] = useState(isOpen);

  useEffect(() => {
    if(isOpen) {
      setRender(true);
      setTimeout(() => setModalOpacity(1), 10);
    } else {
      setModalOpacity(0);
      setTimeout(() => setRender(false), 500); // delay should match transition duration
    }
  }, [isOpen]);

  if (!render) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `rgba(0, 0, 0, ${modalOpacity})`,
        transition: 'background 0.5s ease-in-out',
      }}
    >
      <div
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#3f51b5",
          padding: "1em",
          width: "100%",
          maxWidth: "1000px",
          maxHeight: "550px",
          height: "100%",
          opacity: modalOpacity,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <button onClick={close} style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            border: "none",
            background: "transparent",
            color: "#fff",
            fontSize: "1.5em",
            cursor: "pointer",
          }}>X</button>
        {children}
      </div>
    </div>
  );
};

export default ModalAdd;
