import logo from './logo.svg';
import './App.css';
import DynamicTreeAccordion from './component/accordion';
import ProjectHeader from './component/header';

function App() {
  return (
    <div className="App">
      <ProjectHeader />
      <DynamicTreeAccordion />
    </div>
  );
}

export default App;
