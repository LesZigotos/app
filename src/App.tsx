import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout";
import EducationalCardsPage from "./page/educational-cards-page";
import HomePage from "./page/home-page";
import QuizzPage from "./page/quizz-page";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/educational-cards" element={<EducationalCardsPage />} />
          <Route path="/quizz" element={<QuizzPage />} />
          {/* <Route path="users/:id" element={<Users />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
