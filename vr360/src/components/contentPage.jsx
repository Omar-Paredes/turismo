import React, { useState } from "react";
import Infosec from "./infosec";
import Video from "./video";
import Map from "./map";
import Img360 from "./img360";
import Buttons from "./buttons";

const ContentPage = ({ data }) => {
  const [page, setPage] = useState(0);
  const [showDes, setShowDes] = useState(false)

  const inlineStyle = {
    transform: `translate(${page * -100}%)`,
  };

  return (
    <div className="app-container-header">
      <Img360 data={data} inlineStyle={inlineStyle} showDes={showDes} />
      <Video page={page} data={data} inlineStyle={inlineStyle} />
      <Map data={data} inlineStyle={inlineStyle} />
      <Infosec data={data} inlineStyle={inlineStyle} />
      <Buttons page={page} setPage={setPage} showDes={showDes} setShowDes={setShowDes} />
    </div>
  );
};

export default ContentPage;
