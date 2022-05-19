import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import FileUpload from "./pages/FileUpload";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/fileUpload" element={<FileUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;