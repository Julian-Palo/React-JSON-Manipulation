import React from "react";
import TableItem from "./TableItem";

const ItemList = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <TableItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
    /* </ul> */
  );
};

export default ItemList;
