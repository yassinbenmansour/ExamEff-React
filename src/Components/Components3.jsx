import { useState } from "react";

const Components3 = (props) => {
    const data = props.dataS;
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);

    const Searchfunction = (e) => {
        e.preventDefault();

        const filteredData = data.find(s => s.service.toLowerCase() === search.toLowerCase());
        setResult(filteredData);
    };

    return (
        <div>
            <h1>Recherche par service</h1>

            <form onSubmit={Searchfunction}>
                <input 
                    type="text" 
                    className="form-control my-4" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}
                    name="search" 
                />
                <input 
                    type="submit" 
                    value="chercher"  
                    className="btn btn-warning mb-5" 
                />
            </form>

            <h2>Résultat de la recherche</h2>
            {result ? (
                <ul>
                    <li>Nom: {result.nom}, Prénom: {result.prenom}</li>
                </ul>
            ) : (
                <p>Aucun résultat trouvé</p>
            )}
        </div>
    );
};

export default Components3;
