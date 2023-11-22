import './App.css';
import Adding from './Adding.jsx';
import List from './List.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
        <Adding />
        
        <List />
    </div>
  );
}

export default App;