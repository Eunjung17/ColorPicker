import {useState} from 'react';

// Write your Color component here
const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

// const Color = ({color}) => {
//   return <div className={color}></div>;
// };


const App = () => {
  const [selectedColor, setSelectedColor_2] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow selected" setSelectedColor={setSelectedColor_2}/>
        <Color color="green selected" setSelectedColor={setSelectedColor_2}/>
        <Color color="violet selected" setSelectedColor={setSelectedColor_2}/>
      </div>
    </div>
  );
};

export default App;
