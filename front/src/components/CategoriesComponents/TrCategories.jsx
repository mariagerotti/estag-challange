import DeleteCategories from "./DeleteCategories";

const TrCategories = ({ code, name, tax }) => {
  return (
    <tr>
      <td>{code}</td>
      <td>{name}</td>
      <td>{tax}</td>
      <td>
        <DeleteCategories code={code} />
      </td>
    </tr>
  );
};

export default TrCategories;
