import React from "react";

const TableItem = ({ key, item }) => {
  /* you're going to use object dot entries and this is just general
        javascript knowledge not necessarily just about react so if you
         don't know how to map through properties of an object because
          map usually applies to an array, you need to look up object dot entries */
  return (
    <tr>
      {/* 
      Claude told me I should use Object.entries,
  so I figured out where to put in the file

      how I did it:

            {items.map((item) => (
            <td key={key}>{item == item.JSON ? JSON.stringify(value) : item}</td>
            ))} */}

      {/* the correct way with more trial and error: */}
      {Object.entries(item).map(([key, value]) => (
        <td key={key}>
          {typeof value === "object" ? JSON.stringify(value) : value}
        </td>
      ))}
    </tr>
  );
};

export default TableItem;
