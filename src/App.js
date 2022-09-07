
import Counter from './components/counter/Counter';
import CounterWithHooks from './components/counterWithHooks/CounterWithHooks';
import HookStateToggler from './components/hookStateToggler/HookStateToggler';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterWithHooks />
      <HookStateToggler />
    </div>
  );
}

export default App;
