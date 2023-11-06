import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker';


function App() {
  const colors = ["red", "green", "blue", "yellow", "purple", "black", "pink", "brown", "skyblue", "peach"];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
