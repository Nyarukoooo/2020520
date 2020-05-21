import React from 'react';
import {Element} from 'react-scroll';
import './resources/styles.css';
import Header from './components/header-footer/Header.component';
import Featured from './components/featured/Featured.component';
import PageInfo from './components/pageInfo/PageInfo.component';
import Location from './components/location/Location.component';
import Footer from './components/header-footer/Footer.component';
import DisneyCollege from './components/photoCollege/DisneyCollege.component';
import SongB from './components/photoCollege/SongB.component';
import FayeB from './components/photoCollege/FayeB.component';
import CatCollege from './components/photoCollege/CatCollege.component';
import StayHome from './components/photoCollege/StayHome.component';
import Graduate from './components/pageInfo/Graduate.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="520 快乐">
        <Featured/>
      </Element>

      <Element name="我们">
        <PageInfo />
      </Element>

      <Element name="去年的今天">
        <DisneyCollege/>
      </Element>

      <Element name="7月 生日">
        <SongB/>
        <FayeB/>
      </Element>

      <Element name="蛋黄 & 泡芙">
        <CatCollege/>
      </Element>

      <Element name="3月 至今">
        <StayHome/>
      </Element>

      <Element name="毕业 展望">
        <Graduate/>
      </Element>

      <Location />
      <Footer />
    </div>
  );
}

export default App;
