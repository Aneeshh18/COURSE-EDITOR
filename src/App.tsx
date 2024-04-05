import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditCoursePage from "./components/EditCoursePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit-course/:courseId" element={<EditCoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
