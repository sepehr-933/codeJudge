import React, {useState} from 'react'
import Header from "./layout/Header";
import './App.scss'
import SectionOne from "./layout/SectionOne";
import SectionTwo from "./layout/SectionTwo";
import SectionThree from "./layout/SectionThree";
import SectionFour from "./layout/SectionFour";
import SectionFive from "./layout/SectionFive";
import SectionSix from "./layout/SectionSix";
import Footer from "./layout/Footer";



export default function App() {


    const [show, setShow] = useState(false)

    return (
      <div className="App">
          <Header show={show} setShow={setShow} />
          <SectionOne />
          <SectionTwo />
          <h4 style={{margin:"0 auto 5rem auto"}} className="heading-4 "> چه کسانی<span> اینجا </span>  هستند؟</h4>
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <Footer />
      </div>
  )
}