import './App.css';
import Mouse from './components/Mouse'
import Show from './components/Show'
import h337 from 'heatmap.js'

function App() {
  console.log(h337)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Move the mouse around then press:<br />
          <ul>
            <li>"q" to show the points</li>
            <li>"c" to clear the points</li>
          </ul>
        </p>
        <Mouse />
        <Show h337={h337} />
      </header>
    </div>
  );
}

export default App;
