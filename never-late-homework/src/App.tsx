// App.tsx or your main component file
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Page/Login';

// import Home from './Pages/Home';

const App = () => {
 
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
