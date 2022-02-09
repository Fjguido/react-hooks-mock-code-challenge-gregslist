import React, {useState} from "react";

function ListingCard({image, description, id, location, handleDeleteItem}) {

  const [likes, setLikes] = useState(true)
  

  function handleClick() {
    setLikes(likes => !likes)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => handleDeleteItem(id))


  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {likes ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
