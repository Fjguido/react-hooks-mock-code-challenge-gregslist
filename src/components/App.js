import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [list, setList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then((data) => setList(data))
  },[])

  function handleDeleteItem(id){
    const deletedItem = list.filter((lits) => {return lits.id !== id})
    setList(deletedItem)

  }

 
  const filterList = list.filter((data) => {return data.description.toLowerCase().includes(search.toLowerCase())})
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer list={filterList} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;

