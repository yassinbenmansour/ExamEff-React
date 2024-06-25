import { useState } from "react";

const Components1 = (props) => {

  const [Cars , setCars] = useState([]);
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [Date_circulation, setDate_circulation] = useState("");
  const [Color, setColor] = useState("");


  const AddCar = () => {
    const newCar = {
        
        matricule,
        marque,
        Date_circulation,
        Color 
    }

    setCars([...Cars , newCar]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddCar();
    setMatricule("");
    setMarque("");
    setDate_circulation("");
    setColor("");
  }
  return (
    <div className="container">
      <h1 className="pt-3">Gestion des voiture</h1>

      <form onSubmit={handleSubmit}>
        matricule : <input name="matricule" className="form-control" type="text" onChange={(e)=>setMatricule(e.target.value)} />
        <br></br>
        marque : <select name="marque" className="form-control" onChange={(e)=>setMarque(e.target.value)}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
        </select>
        <br></br>
        Date circulation : <input name="Date_circulation" className="form-control" type="date" onChange={(e)=>setDate_circulation(e.target.value)}/>
        <br></br>
        Color : <input name="Color" className="form-control" type="text" onChange={(e)=>setColor(e.target.value)}/>
        <br></br>
        
        <input className="btn btn-primary" type="submit" />

      </form>

      <h1 className="pt-3">Information : </h1>
        <div>
            {
                Cars.map((car) => {
                    return (
                        <ul key={car.Date_circulation}>
                            <li>Matricule : {car.matricule}</li>
                            <li>Marque : {car.marque}</li>
                            <li>Date circulation : {car.Date_circulation}</li>
                            <li>Color : {car.Color}</li>

                        </ul>
                    )
                })
            }
        </div>
        <div>
            <h1>Information salaries</h1>
            <table className="table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>prenom</th>
                    <th>fonction</th>
                    <th>service</th>
                </tr>
            </thead>
           <tbody>
                {props.dataS.map((salary, index) => (
                    <tr key={index}>
                        <td>{salary.nom}</td>
                        <td>{salary.prenom}</td>
                        <td>{salary.fonction}</td>
                        <td>{salary.service}</td>
                    </tr>
                    ))}
            </tbody>
             </table>
        </div>
    </div>

   
  )
}

export default Components1;