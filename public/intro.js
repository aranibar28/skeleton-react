import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { useRef, useState } from "react";

function CardUser(props) {
  const { name, lastname } = props;
  return (
    <article>
      <h2>
        {name} {lastname}
      </h2>
    </article>
  );
}

function App(props) {
  const ref = useRef(null);
  const refInputName = useRef(null);
  const refInputLastName = useRef(null);
  const usersArray = [];
  const [users, setUser] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    usersArray.push({
      name: refInputName.current.value,
      lastname: refInputLastName.current.value,
    });
    setUser(usersArray);

    console.log("users", users);
  };

  return (
    <div className="wrapper" ref={ref}>
      <Header />

      <Main>
        <h1>Hola mundo {props.name}</h1>
        {/*         
        <button
          onClick={() => {
            console.log("Click!", ref.current.style.backgroundColor = "black");
          }}
        >CLICK
        </button>
        */}

        <form onSubmit={onSubmit}>
          <input placeholder="Nombre" type="text" ref={refInputName} />
          <input placeholder="Apellido" type="text" ref={refInputLastName} />
          <button>Enviar </button>
        </form>

        {users.map((user) => (
          <CardUser  name={user.name} lastname={user.lastname} />
        ))}
      </Main>

      <Footer />
    </div>
  );
}

ReactDOM.render(<App name="Gerson" />, document.getElementById("root"));

/* function OtroComponent() {
  return <div>Otro Componente</div>;
}

function ComponentExample() {
  const nombre = "Gerson";
  const numbers = [0, 1, 2, 3, 4];
  const flag = true;
  const user = {
    name: "John",
    lastName: "Wick",
  };

  const users = [
    {
      name: "Gerson",
      lastName: "Aranibar",
      age: 25,
    },
    {
      name: "Maribel",
      lastName: "Aranibar",
      age: 30,
    },
    {
      name: "Vilma",
      lastName: "Huañahue",
      age: 31,
    },
    {
      name: "Clara",
      lastName: "Concha",
      age: 50,
    },
    {
      name: "Benjamin",
      lastName: "Zavala",
      age: 1,
    },
    {
      name: "Adrianita",
      lastName: "Carmona",
      age: 1,
    },
  ];

  function convierteMayuscular(letter) {
    return letter.toUpperCase();
  }

  return (
    <div className="nombre-de-clase">
      <h1>HOLA MUNDO {numbers.map((number) => number)} </h1>
      {flag && <OtroComponent />}
      {convierteMayuscular(user.name)} {convierteMayuscular(user.lastName)}
      <br />
      <img src="https://picsum.photos/400/400" alt="" />
      {users.map((user) =>
        user.age >= 30 ? (
          <CardUser name={user.name} lastname={user.lastName} age={user.age} />
        ) : (
          <h2>{user.name} No cumple con la condicion </h2>
        )
      )}
    </div>
  );

}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000); */
