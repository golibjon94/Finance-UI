import './App.css';
import Navbar from './Components/Navbar/navbar';
import Sidebar from './Components/Sidebar/sidebar';
import Main from './Components/Main/main';
import Mainright from './Components/MainRight/mainright';
import Schedule from './Components/Schedule/schedule';
import Bottomright from './Components/BottomRight/bottomRight';
// import Footer from './Components/Footer/footer';
import { Provider } from 'react-redux';
import store from "./redux/store"



function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Sidebar/>
       <Navbar/>
       <Main/>
       <Mainright/>
       <Schedule/>
       <Bottomright/>
       {/* <Footer/> */}
    </div>
    </Provider>
  );
}

export default App;
