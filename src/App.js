
import Counter from './components/counter/Counter';
import CounterWithHooks from './components/counterWithHooks/CounterWithHooks';
import HookStateToggler from './components/hookStateToggler/HookStateToggler';
import ClassForm from './components/classForm/ClassForm';
import HookForm from './components/hookForm/HookForm';
import RefactoredHookForm from './components/hookForm/RefactoredHookForm';
import Clicker from './components/clicker/Clicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-title'>
        Hooks PlayGround
      </div>
      <Counter />
      <CounterWithHooks />
      <HookStateToggler />
      <ClassForm />
      <HookForm />
      <RefactoredHookForm />
      <Clicker />
    </div>
  );
}

export default App;
