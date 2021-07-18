import React from 'react'
import giant from '../img/photo.png'

const SectionFive = () => {
    return (
        <div className="sectionFive">
           <h4 className="heading-4 mr-centering">
               چرا ما را انتخاب می‌کنند؟
           </h4>
            <div className="sectionFive__pros">
               <div className="sectionFive__description ordered ">
                   <div className="sectionFive__container adjustment">
                   <p className="sectionFive__paragraph">
                       انعطاف و کنترل کامل کلاس
                   </p>
                       <span className="sectionFive__span sectionFive__span-1">
                   </span>
                   </div>
                   <div className="sectionFive__container adjustment">
                   <p className="sectionFive__paragraph">
                       پشتیبانی از اکثر زبان‌های برنامه‌نویسی
                   </p>
                   <span className="sectionFive__span sectionFive__span-2">
                   </span>
                   </div>
                   <div className="sectionFive__container adjustment">
                       <p className="sectionFive__paragraph">
                           امکان پذیرش همزمان کاربران
                       </p>
                       <span className="sectionFive__span sectionFive__span-3">
                   </span>
                   </div>
                   <div className="sectionFive__container adjustment">
                       <p className="sectionFive__paragraph">
                           تعهد به ارایه سرویس در بلند‌مدت
                       </p>
                       <span className="sectionFive__span sectionFive__span-1">
                   </span>
                   </div>
               </div>

                <img className="sectionFive__img" src={giant} alt="giant of some books"/>

                <div className="sectionFive__description">
                    <div className="sectionFive__container">

                        <span className="sectionFive__span sectionFive__span-1">
                   </span>
                        <p className="sectionFive__paragraph">
                            تخصصی‌ترین فضا برای مدیریت دوره‌های برنامه‌نویسی
                        </p>
                    </div>
                    <div className="sectionFive__container">

                        <span className="sectionFive__span sectionFive__span-2">
                   </span>
                        <p className="sectionFive__paragraph">
                            بک‌آپ گیری‌های منظم
                        </p>
                    </div>
                    <div className="sectionFive__container">

                        <span className="sectionFive__span sectionFive__span-3">
                   </span>
                        <p className="sectionFive__paragraph">
                            ساخت آزمون و تکالیف تشریحی
                        </p>
                    </div>
                    <div className="sectionFive__container">

                        <span className="sectionFive__span sectionFive__span-1">
                   </span>
                        <p className="sectionFive__paragraph">
                            امکان ارتقاء سامانه متناسب با نیاز مراکز
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFive