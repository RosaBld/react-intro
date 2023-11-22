import './App.css';
import Adding from './Adding.jsx';
import { List } from './List.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <body>
        <Adding />
        
        <List />
        
      </body>
    </div>
  );
}

export default App;