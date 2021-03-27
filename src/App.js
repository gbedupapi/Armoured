
import HomeScreen from './pages/Home/Home';
import Flashscreen from './pages/Flashscreen/Flashscreen';
import SignUp from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs'
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css'
//   function App() {
//  return (
// //     <div className="App">
// //      <Navbar/>
// //      <Flashscreen/> 
// //      <Signup/> 
// //       <Login/> 
// //      <Profile/> 
// //      <Contact/>
// //      <Testimony/>
//         <AboutUs/>
// //     </div>
// //   );
// // }

function App() {
  return(
    <BrowserRouter>
        <Route  path="/" exact component={HomeScreen} />
        <Route  path="/welcome" exact component={Flashscreen} />
        <Route  path="/login" component={Login} /> 
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/contact"  component={Contact} />
        <Route path="/about" component={AboutUs} />
    </BrowserRouter>
  );
 } 
export default App;
