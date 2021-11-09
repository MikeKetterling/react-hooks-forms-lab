import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  //const [itemList , setItemList] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    //setItemList(items.filter(item => item.name.includes(searchItem)))
  }

  


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter(item => item.name.includes(searchItem))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchItem} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
