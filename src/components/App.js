import '../App.css';
import List from './List';
import Header from './Header';
import Greetings from './Greetings'
import {add,sub,mul,div} from './Calculate'

function App() {
  
  return (
    <div>
      <Header />
      <ul>
        <li>{add(20,10)}</li>
        <li>{sub(1000,100)}</li>
        <li>{mul(10,10)}</li>
        <li>{div(100,10)}</li>
      </ul>
    </div>
  );
}

export default App;
