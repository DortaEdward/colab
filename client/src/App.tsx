import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="min-w-screen h-screen bg-slate-100">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
