import "./Table.css"

const Table = ({headers, data, columns}) => {

  return (
    /*Criação do componente tabela*/
    <div className="table-component">
        <div className="table-header" style={{ gridTemplateColumns: columns }}>
            {headers.map((header, index) => (
                <div key={index} className="header-cell">
                    {header}
                </div>
            ))}
    </div>

    {data.map((row, rowIndex) => (
        <div key={row.id} className="table-row" style={{ gridTemplateColumns: columns }}>
            {Object.values(row).slice(1).map((cell, cellIndex) => (
            <div key={cellIndex} className="data-cell">
              {cell}
            </div>
         ))}
        </div>
     ))}
    </div>
  )
}

export default Table
