import React from 'react'
import Shape1 from '../img/Direction_1.png'
import Shape2 from '../img/Direction_2.png'
import Timer from  '../img/icon_timer.png'

const SectionFour = () => {
    return (
        <div className="sectionFour">
            <h4 className="heading-4 mr-centering">
                تنها با سه گام مدیریت کلاس خود را متحول کنید
            </h4>
            <div className="sectionFour__benefits">
                <div className="sectionFour__items">
                    <span className="sectionFour__span sectionFour__span-1 mr-bt-md">
                        1
                                    <img src={Shape1} alt="shape 1" className="sectionFour__direction-1"/>
                    </span>
                    <p className="sectionFour__paragraph">
                        کلاس آموزشی خود را ایجاد و
                        .فراگیران خود را به آن اضافه کنید
                    </p>
                </div>
                <div className="sectionFour__items">
                    <span className="sectionFour__span sectionFour__span-2 mr-bt-md">
                        2
                                    <img src={Shape2} alt="shape 2" className="sectionFour__direction-2"/>
                                    <img src={Shape1}  alt="responsive shape" className="sectionFour__direction-res"/>
                    </span>
                    <p className="sectionFour__paragraph">
                        محتوای درسی و تکالیف یا آزمون را
                        .برای هر جلسه آموزشی تعریف کنید
                    </p>
                </div>
                <div className="sectionFour__items sectionFour__items-res">
                    <span className="sectionFour__span sectionFour__span-3 mr-bt-md">
                        3
                    </span>
                    <p className="sectionFour__paragraph">
                        فراگیران می‌توانند پس مشاهده محتوا
                        پاسخ ارسال کنند و تنها پس از چند
                        .لحظه نتیجه کار دریافت کنند
                    </p>
                </div>
            </div>
            <button className="sectionFour__button">
                <img src={Timer} alt="timer" className="sectionFour__img"/>
                <p className="sectionFour__paragraph">بدون نیاز به آموزش اولیه در چند ثانیه</p>
            </button>
        </div>
    )
}

export default SectionFour