import Page from "./components/";
import { HashRouter, Route, Routes } from "react-router-dom";
import RedirectLanding from "./components/redirectLanding";
import RedirectTo from "./components/redirectTo";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RedirectLanding />} />
        <Route path="/:id" element={<Page />} />
        <Route path="*" element={<RedirectTo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
