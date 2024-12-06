import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/home-page";
import QuizzPage from "./page/quizz-page";
import "./App.css";
import EducationalCardsPage from "./page/educational-cards-page";
import Layout from "./component/layout";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
