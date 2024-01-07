import { PackageFormCreate, PackageItem, PackageList, PackageFormEdit } from './components';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
<Routes>
<Route path='/' element={<PackageList />} />
<Route path="/item/:itemId" element={<PackageItem />} />
<Route path='/create' element={<PackageFormCreate />} />
<Route path='/edit' element={<PackageFormEdit />} />



</Routes>
      </Router>
    </div>
  );
}

export default App
