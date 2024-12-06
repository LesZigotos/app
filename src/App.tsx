import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/home-page'
import QuizzPage from './page/quizz-page'

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/quizz" element={<QuizzPage />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
