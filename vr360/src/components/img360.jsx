import React from "react";

const Img360 = ({ data, inlineStyle, showDes }) => {
  return (
    <div style={inlineStyle} className="embed360 page" data-rotation="0 90 -10">
      <a-scene className="RV">
        <a-sky src={data.imagen}></a-sky>
      </a-scene>

      <div className={(showDes ? "aparecer " : "desaparecer ") + "content360"}>
        <h2 className="title">{data.nombre}</h2>
        <p className="atractivo-description">{data.descripcion}</p>
      </div>
    </div>
  );
};

export default Img360;
