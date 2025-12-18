
import './App.css';
import Cart from './Component/Cart';
import Awatar from './Component/Awatar';

function App() {

  const gridBox = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  return (
    <div style={gridBox}>
      <Cart 
        name = "Anirudh"
        email = "anirudh@gmail.com"
        image = "https://via.placeholder.com/200"
      />
      <Cart 
        name = "chandan"
        email = "chandan@gmail.com"
        image = "https://via.placeholder.com/200"
      />
      <Cart 
        name = "mohan"
        email = "mohan@gmail.com"
        image = "https://via.placeholder.com/200"
      />
      <Awatar name="rohan" image="https://via.placeholder.com/100" />
        
    </div>
  );
}

export default App;
