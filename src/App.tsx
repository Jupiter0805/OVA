import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <AnimatePresence>
      <Home />
    </AnimatePresence>
  );
}

export default App;
