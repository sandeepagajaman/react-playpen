import logo from './logo.svg';
import './App.css';
import TestJsx from './playpen/Jsx';
import User from './playpen/Class';
import Student from './playpen/Function';
import Clock from './playpen/State';
import LifeCycle from './playpen/LifeCycle';
import Form from './playpen/Events';
import Login from './playpen/ConditionalRendering';
import NumberList from './playpen/Keys';
import WebForm from './playpen/Forms';
import ReusableForm from './playpen/ReusableComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestJsx/>
        <User/>
        <Student name='Sandeepa'/>
        <Student name='Lahiru'/>
        <Clock/>
        <LifeCycle/>
        <Form/>
        <Login/>
        <NumberList/>
        <WebForm/>
        <ReusableForm/>
      </header>
    </div>
  );
}

export default App;
