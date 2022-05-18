import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  // @ts-ignore
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };
  // @ts-ignore
  const addTopping = (topping) => {
    let newToppings;
    // @ts-ignore
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    // @ts-ignore
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newTodo" />
        <Route
          path="/base"
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
