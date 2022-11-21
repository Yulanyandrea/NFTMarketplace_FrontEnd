import './App.scss';
// import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/index';
// import LoginForm from './components/Auth/loginForm';
// import RegisterForm from './components/Auth/RegisterForm';
// import CreateNFT from './components/CreateNft';
import Footer from './components/Footer/index';
// import Home from './components/Home';
import happy from './components/Footer/images/happy.jpg';
// import Create from './components/CreateandSell';
// import message from './components/CreateandSell/images/message.jpg';
// import ProductDetails from './components/ProductDetails';
import OurCollection from './pages/OurCollection/OurCollection';
import data from './pages/OurCollection/collection.json';

const App = () => {
  return (

    <div className="App">
      {/* <Create
        title="STEP-01"
        imageHeader={message}
        titleArticle="Set up your wallet"
        description="Powerful features and inclusions,
      which makes Nuron standout, easily customizable and scalable."
      /> */}
      {/* <CreateNFT /> */}
      {/* <TopCollection imageSell={tree} imageProfile={profile} /> */}
      {/* <TopSeller imageTop={flower} textTop="TrodBrand" priceTop="$400" /> */}
      {/* <NftCard bit="5+" name="NameStroam" bid="1/20" price="0.244" likes="532" /> */}
      <Navbar />
      {/*
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail"
         element={<ProductDetails bid="0.244" number="22" owner="Broodband" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/createnft" element={<CreateNFT />} />
      </Routes> */}
      <OurCollection informations={data} />
      <Footer image={happy} name="picture" characteristic="Highest bid 1/20" price={30} />
    </div>

  );
};

export default App;
