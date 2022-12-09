import { Routes, Route } from 'react-router-dom';
import happy from './components/Footer/images/happy.jpg';
import Navbar from './components/Navbar/index';
import LoginForm from './components/Auth/loginForm';
import RegisterForm from './components/Auth/RegisterForm';
import CreateNFT from './components/CreateNft';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Details from './pages/Details';
import EditProfile from './components/EditProfile/Edit';

import OurCollection from './pages/OurCollection/OurCollection';
import data from './assets/collection.json';
import './App.scss';

const App = () => {
  return (

    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<Details />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/createnft" element={<CreateNFT />} />
        <Route path="/ourcollection" element={<OurCollection informations={data} />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Routes>

      <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} />
    </div>

  );
};

export default App;
