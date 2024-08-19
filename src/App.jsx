import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListContacts from "./Components/ListContacts";
import AddContact from "./Components/AddContact";
//import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListContacts />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </Router>
  );
}

export default App;
