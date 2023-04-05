import React from "react";

const Img360 = ({ data, inlineStyle, showDes }) => {
  return (
    <div style={inlineStyle} className="embed360 page" data-rotation="0 90 -10">
      <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
      />

      <div className={(showDes ? "aparecer " : "desaparecer ") + "content360"}>
        <h2 className="title">{data.nombre}</h2>
        <p className="atractivo-description">{data.descripcion}</p>
      </div>
    </div>
  );
};

export default Img360;
