import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Callback from './pages/Callback'

//hello
const App = () => {
  return (
  <BrowserRouter>
  {/* header */}
    <Header/>

    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/auth/callback' element={<Callback/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App
