import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackState from "./components/FeedbackState";
import Form from "./components/Form";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Form />
                  <FeedbackState />
                  <FeedbackList />
                </>
              }></Route>

            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
