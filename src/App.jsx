import Canvas from './components/Canvas';
import './styles/App.scss';
import SettingsBar from './components/SettingsBar';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="app">
      <Toolbar/>
      <SettingsBar/>
      <Canvas />
    </div>
  );
}

export default App;
