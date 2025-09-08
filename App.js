import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Hello from './components/Hello';
import Button from './components/Button';
import Avatar from './components/avatar';


function App() {
  return (
    <div className="App">
      <Greetings />
      <Hello />
      <h2>Let's learn react</h2>
      <Button text="I am Button" color="blue" />
      <img src={logo} className="App-logo" alt="logo" />
      <h5>
        {true ? "Statment is True" : "Statment is False"}
      </h5>
      <Avatar
        name="User"
        src="https://avatars.githubusercontent.com/u/181377085?v=4"
      />
      <Avatar
        name="User2"
        src="https://avatars.githubusercontent.com/u/181377085?v=4"
      />
      <Avatar
        name="User3"
        src="https://avatars.githubusercontent.com/u/181377085?v=4"
      />
    </div>
  );
}

export default App;
