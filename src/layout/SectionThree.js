import React from 'react'
import logo1 from '../img/logo_1.png'
import logo2 from '../img/logo_2.png'

const SectionThree = () => {

    return (
        <div className="sectionThree">

            <div className="sectionThree__about">
                <p className="mr-bt-sm">
                    +۸
                    </p>
                <p className="fontSetter">مراکز آموزشی
                </p>

            </div>

              <div className="sectionThree__about">
                  <p className="mr-bt-sm">
                  +۵۰
                      </p><p className="fontSetter">
                  استاد
                  </p>
              </div>
            <div className="sectionThree__about">
              <p className="mr-bt-sm"> +۱۰۰۰۰ </p>
               <p className="fontSetter"> دانشجو
               </p>
            </div>

            <div className="sectionThree__customers">
                <h5 className="heading-5 mr-bt-sm">
                    سرویس گیرنده‌های ما
                </h5>
                <div className="sectionThree__badges">
                    <img src={logo1} alt="logo 1" className="sectionThree__img mr-lf-sm"/>
                    <img src={logo2} alt="logo 2" className="sectionThree__img"/>
                </div>
            </div>


        </div>
    )
}

export default SectionThree