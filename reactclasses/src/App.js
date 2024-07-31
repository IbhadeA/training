// this app.js is the root/main component that wraps other components
import './App.css';
// import Header from './components/Header';
// import Greet from './components/Greet';
// import Name from './components/Name';
// import Job from './components/Job';
// import Hobbies from './components/Hobbies';
// import ParentComponent from './components/props/ParentComponent';
import Counter from './components/props/Counter';


function App() {
  return (
    <div className='container text'>
      {/* <h2>State</h2> */}
      <Counter/>
      
      {/* props */}
      {/* <ParentComponent/> */}
      
      {/* components */}
      {/* <Name/>
      <Job/>
      <Hobbies/> */}
     
      {/* <Header/>
      <Greet/> */}
    

    </div>
  );
}

export default App;
