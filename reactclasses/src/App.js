// this app.js is the root/main component that wraps other components
import './App.css';
// import Header from './components/Header';
// import Greet from './components/Greet';
import Name from './components/Name';
import Job from './components/Job';
import Hobbies from './components/Hobbies';
// import './index.css';


function App() {
  return (
    <div className='container text'>
      <Name/>
      <Job/>
      <Hobbies/>
     
      {/* <Header/>
      <Greet/> */}
    

    </div>
  );
}

export default App;
