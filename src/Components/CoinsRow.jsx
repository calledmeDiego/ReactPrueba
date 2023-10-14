import React from 'react'

export const CoinsRow = ({ coin, index }) => {
    return (
        <tr>
            <td className='text-muted'>
                {index}
            </td>
            <td>
                <img src={coin.image} alt="imagen" style={{ width: "3%" }} className='img-fluid me-4' />
                <span>
                    {coin.name}
                </span>
                <span className='ms-3 text-muted'>{coin.symbol}</span>
            </td>
            <td className={coin.price_change_percentage_24h >0 ? "text-success" : "text-danger"}>
            {coin.price_change_percentage_24h}
            </td>
            <td>
                ${coin.total_volume.toLocalString()}
            </td>
            <td>
                ${coin.total_volume.toLocalString()}
            </td>

        </tr>
    );
}

export default CoinsRow;
