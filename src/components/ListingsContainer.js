import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({list, handleDeleteItem}) {
  const listy = list.map((lit) => {
    return <ListingCard handleDeleteItem={handleDeleteItem} id={lit.id} key={lit.id} description={lit.description} image={lit.image} location={lit.location} />
  })
  return (
    <main>
      <ul className="cards">
        {listy}
      </ul>
    </main>
  );
}

export default ListingsContainer;
