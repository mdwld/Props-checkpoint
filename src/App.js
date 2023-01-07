import './App.css';
import Profile from './Profile/Profile';
function App() {
  
  return (
    <div  className="App">
     <h1 style ={{color : "crimson"}}>Props WS</h1>
     <Profile fullName="BEN RHIMA Mohamed Walid" bio="full stack Javascript" profession = "web devolopper" >
      <img src='https://i.pinimg.com/474x/ef/16/e4/ef16e4e68b0d3cb81e6bb8a8c3258d7e--work-desk-motion-design.jpg' alt='profile-pic'/>
      </Profile>
    </div>
  );
}

export default App;

