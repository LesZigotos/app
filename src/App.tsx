import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout";
import EducationalCardsPage from "./page/educational-cards-page";
import HomePage from "./page/home-page";
import QuizzPage from "./page/quizz-page";
import PodcastPage from "./page/podcast-page";

function App() {
  return (
    <HashRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/educational-cards" element={<EducationalCardsPage />} />
          <Route path="/quizz" element={<QuizzPage />} />
		  <Route path="/podcast" element={<PodcastPage />} />
          {/* <Route path="users/:id" element={<Users />} /> */}
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
