import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/list";
import Form from "./components/Form";
import { person } from "./types";

interface AppSte {
  person: Array<person>;
  newPersonNumber: number;
}
const initialState = [
  {
    id: 1,
    nombre: "juan",
    apellidos: "salazar",
    avatar: "https://i.pravatar.cc/150?u=juan",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam aspernatur suscipit quis laborum nostrum, voluptatem ducimus eum fuga perspiciatis temporibus voluptas, qui in aut explicabo reprehenderit. Exercitationem, quibusdam voluptatum.",
  },
  {
    id: 2,
    nombre: "paco",
    apellidos: "gonzalez",
    avatar: "https://i.pravatar.cc/150?u=paco",
  },
];
function App() {
  const [person, setPerson] = useState<AppSte["person"]>([]);
  // const [NewPerson, setNewPerson] = useState<AppSte/>//["newPersonNumber"]>(0);

  useEffect(() => {
    setPerson(initialState);
  }, []);
  return (
    <div className="container">
      <List person={person} />
      <Form onNewPerson={setPerson} />
    </div>
  );
}

export default App;
