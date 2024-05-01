import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Shoppinglist = [
  {
    id: 1,
    name: "Milk",
    imageUrl:
      "https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg",
    imageSize: 60,
  },
  {
    id: 2,
    name: "Bread",
    imageUrl:
      "https://img.freepik.com/premium-photo/slices-bread-isolated-white-background-top-view_530649-32.jpg",
    imageSize: 60,
  },
  {
    id: 3,
    name: "Indomie",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI65YictgmbNvKbL8Yn5miyN841BkAwxsiA2PKxAPoWg&s",
    imageSize: 60,
  },
  {
    id: 4,
    name: "Butter",
    imageUrl:
      "https://c8.alamy.com/comp/BXRXHJ/unsalted-butter-close-up-BXRXHJ.jpg",
    imageSize: 60,
  },
  {
    id: 5,
    name: "Eggs",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBg2jsXpnpXFdr5P97SS5-a64eSdHj-WjHl-CRjQoRQ&s",
    imageSize: 60,
  },
  {
    id: 6,
    name: "Yogurt",
    imageUrl:
      "https://media.istockphoto.com/id/159758583/photo/strawberry-dessert-in-a-clear-bowl.jpg?s=612x612&w=0&k=20&c=uJwhiltEWEq10farUFcPPiNBRz3Qr7-Hm00QVSwUSdc=",
    imageSize: 60,
  },
];

export default function App() {
  const listItems = Shoppinglist.map((item) => (
    <li key={item.id}>
      <img src={item.imageUrl} alt={item.name} />
      {item.name}
    </li>
  ));

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {Shoppinglist.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            {item.name}
          </li>
        ))}
      </ul>

      <img
        className="App-logo"
        src="Shppinglist.imageUrl"
        alt="Photo of Shoppinglist.name"
        style={{
          width: Shoppinglist.imageSize,
          height: Shoppinglist.imageSize,
        }}
      ></img>
    </div>
  );
}
