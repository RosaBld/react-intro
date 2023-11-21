import './App.css';
import Adding from './Adding.js';
import { List } from './List.js';

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
