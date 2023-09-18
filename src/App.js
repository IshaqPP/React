import './App.css';

function App() {
  const name = "Ishaq P P";
  const dateobj = new Date();
  const year = dateobj.getFullYear();
  return (
    <div className="App">
      <h1>  Created By {name}</h1>
     <p>Copyright {year} </p>      
    </div>
  );
}

export default App;
