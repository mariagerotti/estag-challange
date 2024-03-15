import { useEffect, useState } from "react";
import DeleteCategories from "./DeleteCategories";

const TrCategories = ({ code, name, tax, deleteFunction }) => {
  return (
    <tr>
      <td>{code}</td>
      <td>{name}</td>
      <td>{tax}</td>
      <td>
        <DeleteCategories onclick={deleteFunction} />
      </td>
    </tr>
  );
};

export default TrCategories;
