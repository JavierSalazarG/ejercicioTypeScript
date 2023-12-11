import React from "react";
import { person } from "../types";
interface Props {
  person: Array<person>;
}
const List = ({ person }: Props) => {
  const renderList = (): JSX.Element[] => {
    return person.map((p) => {
      return (
        <li key={p.nombre}>
          <img src={p.avatar} alt={`avatar de ${p.avatar}`} />
          <h4>{p.nombre}</h4>
          <h5>{p.apellidos}</h5>
          <p>{p.descripcion?.substring(0, 50)}</p>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
