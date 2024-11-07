import {useState} from 'react';

// Write your Color component here
const Color = ({ color, setSelectedColor, selectedColor}) => {
    return (<div className={`${color} ${selectedColor===color ? 'selected': ''}`} 
      onClick={() => setSelectedColor(color)}></div>);
};

// const Color = ({color}) => {
//   return <div className={color}></div>;
// };


const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="violet" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
};

export default App;
