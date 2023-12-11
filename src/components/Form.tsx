import React, { SetStateAction, useState } from "react";
import { person } from "../types";
interface FormState {
  inputValue: person;
}
interface FormProps {
  onNewPerson: React.Dispatch<SetStateAction<person[]>>;
}
const Form = ({ onNewPerson }: FormProps) => {
  const [inputValue, setInputValue] = useState<FormState["inputValue"]>({
    id: 0,
    nombre: "",
    apellidos: "",
    avatar: "",
    descripcion: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewPerson((pers) => [...pers, inputValue]);
  };
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue.id}
          onChange={handleOnChange}
          type="number"
          placeholder="Numero de identificacion"
          name="id"
          id="id"
        />
        <input
          value={inputValue.nombre}
          onChange={handleOnChange}
          placeholder="Nombre"
          type="text"
          name="nombre"
          id="nombre"
        />
        <input
          value={inputValue.apellidos}
          onChange={handleOnChange}
          type="text"
          name="apellidos"
          placeholder="apellidos"
          id="apellidos"
        />
        <input
          value={inputValue.avatar}
          onChange={handleOnChange}
          type="text"
          name="avatar"
          placeholder="Link de tu avatar"
          id="avatar"
        />

        <textarea
          value={inputValue.descripcion}
          onChange={handleOnChange}
          name="descripcion"
          placeholder="Descripcion"
          id="descripcion"
        />
        <button>Guardar nuevo usuario</button>
      </form>
    </div>
  );
};

export default Form;
