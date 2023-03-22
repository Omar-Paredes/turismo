import { useEffect, useState } from "react";
import "../styles/App.css";
import { getDestinates } from "../services/destinates";
import Loader from "./loader";
import ContentPage from "./contentPage";
import config from "../config";
import Header from "./header";
import { useParams } from "react-router-dom";

function App() {
  const [data, setData] = useState({});
  const { id: res } = useParams();
  
  if(Number.isNaN(Number(res))) {
    window.location.href = config.urlPrincipal + res;
  }

  const handlGgetDestinates = async (id) => {
    const res = await getDestinates(id);
    if(res) {
      setData(res);
    } else {
      window.location.href = config.urlPrincipal;
    }
  };

  useEffect(() => {
    handlGgetDestinates(+res);
  }, []);
  
  return (
    <>
      <Header />
      {data.altitud == undefined && <Loader />}

      {data.altitud != undefined && (
        <ContentPage data={data} />
      )}
    </>
  );
}

export default App;
