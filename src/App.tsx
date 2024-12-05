import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/home-page'

function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			{/* <Route path="users/:id" element={<Users />} /> */}
		</Routes>
	</BrowserRouter>
  )
}

export default App
