import React from 'react'
import CoinsRow from './CoinsRow';

const titles = ["#", "Moneda", "Precio", "Precio de venta", "Volumen"];
export const Table = ({ coins, search }) => {
    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

    if (!coins)
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
                {filteredCoins.map((coin, index) => (
                    <CoinsRow key={coin.id} coin={coin} index={index + 1} />
                ))}
                
            </tbody>
        </table>
    );
}

export default Table;
