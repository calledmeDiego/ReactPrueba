import React from 'react'
import RowFile from './RowFile.jsx';

const titles = ["#", "Nombres", "url","imagen"];
export const TablePokemon = ({ pokemonNames }) => {
    // const filteredNames = pokemonNames.filter((pokemonName) => pokemonName.name.toLowerCase().includes(search.toLowerCase()));

    if (!pokemonNames)
        return <div>No existen monedas</div>

    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    {titles.map((title, i) => (
                        <td key={i}>{title} </td>
                    )
                        )}
                </tr>
            </thead>
            <tbody>
                {pokemonNames.map((pokemonName) => (
                    <RowFile key={pokemonName.id} pokemonName={pokemonName}  />
                   
                    
                ))}
                
            </tbody>
        </table>
    );
}

export default TablePokemon;
