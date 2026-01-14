import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Edit from "./pages/edit"
import Detail from "./pages/detail"
import Create from "./pages/create"
import Home from "./pages/home"
import Layout from "./components/layout"

function App () {
  return <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/create" element={<Create/>} />

    <Route element= {<Layout />}>
    <Route path="/note/:id" element={<Detail/>} />
    <Route path="/note/:id/edit" element={<Edit/>} />
      </Route>

      {/* Tanımsız tüm route'lar için */}
      <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
  </BrowserRouter>

}

export default App