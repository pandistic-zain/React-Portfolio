import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import FrontPage from "./Components/FrontPage.jsx";
import FeedbackPage from "./Components/FeedbackPage.jsx";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FrontPage />
          </motion.div>
        }/>
        <Route exact path="/letsconnect" element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeedbackPage />
          </motion.div>
        }/>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
