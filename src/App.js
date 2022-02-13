import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom';
import home from './Components/home';
import contact from './Components/contact';
import project from './Components/project';
import about from './Components/about';
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/about" component={about}/>
        <Route exact path="/contact" component={contact}/>
        <Route exact path="/project" component={project}/>
        
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
    
   
   
  );
}

export default App;
