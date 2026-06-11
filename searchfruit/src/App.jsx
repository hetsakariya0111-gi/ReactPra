

const App = () => {

  const data = {  fruits : [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
    { id: 4, name: "Orange" },
    { id: 5, name: "Grapes" },]};

    function handleSearch() {
      const searchInput = document.querySelector("input").value;
      const filteredFruits = data.fruits.filter((fruit) => {
        return fruit.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log(filteredFruits);
    }
   
  return (
    <div>
      <h1>Search Fruit</h1>
      <input
      type="text" 
      value={name} 
      onChange={()=>{handleSearch()}} />
      {data.fruits.map((item, index) =>  {    
        
          <div key={index}>
            <p>{item.name}</p>
          </div>
        
      })};
    </div>
  );
};

export default App;
