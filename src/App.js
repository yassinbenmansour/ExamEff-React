import Components1 from "./Components/Components1";
import { useEffect,useState } from "react";
import axios from "axios";
import Components3 from "./Components/Components3";
import {Link, Routes, Route , BrowserRouter} from "react-router-dom";

const App = () => {

  const [salaries, setSalaries] = useState([
    { nom: "Dupont", prenom: "Jean", fonction: "Développeur", service: "Informatique" },
    { nom: "Martin", prenom: "Marie", fonction: "Designer", service: "Marketing" },
    { nom: "Durand", prenom: "Paul", fonction: "Manager", service: "Ressources Humaines" }
  ]);

  // useEffect(() => {
  //   axios.get('http://localhost:8000/salaries')
  //   .then(res => setSalaries(res.data))
  // },[]);


  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Components1 dataS={salaries} />}/>
            <Route path="/s" element={<Components3 dataS={salaries} />}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;