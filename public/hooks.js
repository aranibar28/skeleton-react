import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
/* import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { useRef, useState } from "react"; */

function CardUser(props) {
  const { name, lastname } = props;
  return (
    <article>
      <h1>{name} {lastname}</h1>
    </article>
  );
}

function App(props) {
  function Counter() {
    const [count, setCount] = useState(5);
    return (
      <div
        style={{
          backgroundColor: "#cdcdcd",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    );
  }

  return (
    <div>
      <CardUser  name="Gerson" lastname="Aranibar" />
      <CardUser  name="Marliz" lastname="Malpartida" />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

ReactDOM.render(<App name="Gerson" />, document.getElementById("root"));
