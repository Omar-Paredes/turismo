import React from "react";

const Buttons = ({ page, setPage, setShowDes, showDes }) => {

  const handleClick = (val) => {
    setPage(val);

  };


  function showComponent() {
    if (page != 0) {
      return (
        <button
          title="Ver el atractivo en realidad virtual"
          onClick={() => handleClick(0)}
        >
          <i className="fa-solid fa-vr-cardboard"></i>
          <span>Realidad virtual</span>
        </button>
      );
    }
    return (
      <button
        title="Ver la descripcion del atractivo"
        onClick={() => {setShowDes(!showDes)}}
      >
        <i className="fa-solid fa-book"></i>
        <span>Descripcion</span>
      </button>
    );
  }

  return (
    <div className="button-container">
      {showComponent()}
      <button
        title="Ver un video informativo del atractivo"
        onClick={() => handleClick(1)}
      >
        <i className="fa-solid fa-film"></i>
        <span>Video</span>
      </button>
      <button
        title="Ver la ubicación del atractivo"
        onClick={() => handleClick(2)}
      >
        <i className="fa-solid fa-location-dot"></i>
        <span>Ubicación</span>
      </button>
      <button title="Ver detalles del atractivo" onClick={() => handleClick(3)}>
        <i className="fa-solid fa-circle-info"></i>
        <span>Información</span>
      </button>
    </div>
  );
};

export default Buttons;
