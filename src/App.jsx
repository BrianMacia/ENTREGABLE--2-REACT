import Request from './components/Request.jsx';
import './App.css';

document.body.style = "background: rgb(224, 246, 255)";

document.title = "Weather App";

function App() {
  return (
    <div className="background">
      <Request/>
    </div>
  );
}

export default App;