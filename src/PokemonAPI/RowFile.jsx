import React from 'react'

export const RowFile = ({ pokemonName }) => {
    return (
        <tr>
            {/* <td className='text-muted'>
                {index}
            </td> */}
             <td>
                        <span key={pokemonName.id} className='text-light'>{pokemonName.id}</span>
                    </td>
            <td>

                <span key={pokemonName.name}>
                    {pokemonName.name}
                </span>
                
            </td>
            <td>
                        <span key={pokemonName.url}>{pokemonName.url}</span>
                    </td>
                    <td >
                        <img key={pokemonName.imageURL} src={pokemonName.imageURL} alt="" />
                    
                    </td>
            {/* <td >
                <span className='ms-3 text-muted'>{coin.url}</span>
            </td> */}
        </tr>
    );
}

export default RowFile;
