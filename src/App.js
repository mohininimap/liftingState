import './App.css';
import Counters from './counter-remove-locally/Counters';
import ParentOBJ from './destructe-ex-obj/Parent';
import Parentdata from './destructure-ex-data/Paraentdata';
import StateliftParent from './statelifting-ex/StateliftParent';

function App() {
  
  return (
    <div className="App">
     {/* <StateliftParent /> */}
      {/* <Parentdata/> */}
      <Counters/>
     
    </div>
  );
}

export default App;
