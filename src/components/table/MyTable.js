import React from "react";
import { useTable } from "react-table";

function MyTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div style={{ position: "relative", display: "contents" }}>
      {/* Table */}
      <table
        {...getTableProps()}
        style={{ borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    background: "lightblue",
                    color: "black",
                    fontWeight: "bold",
                    padding: "10px",
                    border: "none",
                    textAlign: "center",
                  }}
                  key={index}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            const rowStyle =
              index % 2 === 0
                ? { background: "white" }
                : { background: "lightgreen" };
            return (
              <tr
                {...row.getRowProps()}
                key={index}
                style={{
                  marginBottom: "10px",
                  ...rowStyle,
                }}
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "none",
                      textAlign: "center",
                    }}
                    key={cellIndex}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyTable;
