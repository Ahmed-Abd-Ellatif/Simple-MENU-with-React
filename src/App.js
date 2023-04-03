import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemData, setItemData] = useState(items);

  //Get All Cat Unique
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];

  //filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemData(newArr);
    }
  };
  //filter by search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemData(newArr);
    } else {
    }
  };
  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemsList itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
