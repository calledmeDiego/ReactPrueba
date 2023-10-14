import { useEffect, useState } from "react";
import axios from "axios";
import TablePokemon from "../PokemonAPI/TablePokemon.jsx";

function Index() {
    const [pokemonNames, setPokemonNames] = useState([]);

    // const [search, setSearch] = useState("");

    const getData = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setPokemonNames(res.data.results);
            console.log(res.data.results);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    },[]);

    return(
        <div className="container">
            <div className="row">
                <input type="text"
                
                className="form-control text-light bg-dark text-light border-0 mt-4 text-center " autoFocus onChange={(event)=>setSearch(event.target.value)}></input>

                <TablePokemon pokemonNames={pokemonNames} > </TablePokemon>
            </div>
        </div>
    );
}

export default Index;