import "./App.css";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Components/FrontPage.jsx";
import FeedbackPage from "./Components/FeedbackPage.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<FrontPage/>}></Route>
      <Route exact path="/letsconnect" element={<FeedbackPage/>}></Route>
    </Routes>
   
    </>
  );
}
export default App;
