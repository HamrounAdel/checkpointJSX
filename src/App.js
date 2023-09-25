
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';


const firstName = ''; // Replace with your first name or leave it as is
const message = firstName ? `Hello, ${firstName}!` : 'Hello, there!';
function App() {
  return (
    <div className="App">
      <Product/>
       Message={message}

    </div>
  );
}

export default App;
