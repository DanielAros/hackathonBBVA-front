import React, { useEffect, useState } from "react";
import './Table.css'

const Table = () => {

    const [rowsTable, setRowsTable] = useState();
    const [startRow, setStartRow] = useState(0);
    const [endRow, setEndRow] = useState(10);
    // let startRow = 0;
    // let endRow = 10;

    useEffect(() => {
        fetch(`http://localhost:3001/api/?startRow=${startRow}&endRow=${endRow}`)
            .then(res => res.json())
            .then(data => setRowsTable(data));
    }, [endRow]);

    const nextRow = () => {
        setStartRow(startRow + 10);
        setEndRow(endRow + 10)
    }

    const backRow = () => {
        setStartRow(startRow - 10);
        setEndRow(endRow - 10)
    }

    return(
        <div>
            {
                // console.log(rowsTable)
                console.log(startRow, endRow)
            }
            <table className="table" id="empresas">
                <tbody>
                    <tr>
                        <th className="th">Nombre completo</th>
                        <th className="th">Estado</th>
                        <th className="th">Direccion</th>
                        <th className="th">Colonia</th>
                        <th className="th">CP</th>
                    </tr>
                    {
                        rowsTable 
                        ?
                            rowsTable.data.map((element, index) => <tr key={index} className='tr'>
                                <td className="td">{element.NombComp}</td>
                                <td className="td">{element.Estado}</td>
                                <td className="td">{element.Direccion1} #{element.Direccion2} {element.Direccion3}</td>
                                <td className="td">{element.Colonia}</td>
                                <td className="td">{element.CP}</td>
                            </tr> )
                        :
                            ''
                    }
                </tbody>
            </table>
            <div className="container-buttons">
                {
                    startRow != 0 
                    ?
                        <button onClick={() => backRow()} className="buttons">Atrás</button>
                    :
                        <button onClick={() => backRow()} className="buttons" disabled>Atrás</button>
                }
                <button onClick={() => nextRow()} className="buttons">Siguiente</button>
            </div>
        </div>
        
    )
}

export default Table;