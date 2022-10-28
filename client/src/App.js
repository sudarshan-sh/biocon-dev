import AddVisit from "./components/AddVisit/index";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Visitee from "./pages/Visitee";
import ViewMyVisitor from "./components/ViewMyVisitor/index";
import TemporaryPass from "./components/TemporaryPass/index";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route index element={<AddVisit />} />
        <Route path="visitee" element={<Visitee />} />
        <Route path="viewmyvisitor" element={<ViewMyVisitor />} />
        <Route path="temporarypass" element={<TemporaryPass />} />
      </Routes>
    </div>
  );
}

export default App;
