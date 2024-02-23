import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavB from "./components/NavB"; // Ensure this path is correct
import ColorList from './components/ColorList';
import ColorDetails from './components/ColorDetails';
import NewColorForm from './components/NewColorForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  // Initialize colors state
  const [colors, setColors] = useState([
    { name: 'red', hex: '#FF0000' },
    { name: 'green', hex: '#00FF00' },
    { name: 'blue', hex: '#0000FF' }
  ]);

  // Function to add a new color
  const addColor = (newColor) => {
    setColors(currentColors => [newColor, ...currentColors]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavB />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/colors" element={<ColorList colors={colors} />} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
          <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
          {/* Redirect any non-defined route to the color list */}
          <Route path="*" element={<ColorList colors={colors} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
