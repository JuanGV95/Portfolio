// App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import AppContent from './components/AppContent';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
