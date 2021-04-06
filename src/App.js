import logo from './logo.svg';
import './App.css';
import Person from'./components/Person';

function App() {
  return (
    <>
    <div className="App">
      <div>
        <Person name="baoanh" age="22">
          My hobbies: Linh
        </Person>
      </div>
    </div>
    </>
  );
}

export default App;
