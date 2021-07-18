import React from 'react'
import imageOne from '../img/icon_management.png'
import imageTwo from '../img/icon_creation.png'
import imageThree from '../img/icon_presentation.png'

const SectionTwo = () => {
    return (
        <div className="sectionTwo">
            <h4 className="heading-4 mr-bt-md">
                امکانات <span>جامع</span> ما
            </h4>
            <h5 className="heading-5 mr-bt-sm hiding">
                ...شما بی نیاز می‌شوید
            </h5>
            <div className="sectionTwo__services mr-bt-sm">
                <div className="sectionTwo__items">
                    <img src={imageOne} alt="management" className="sectionTwo__img mr-bt-sm"/>
                    <p className="sectionTwo__paragraph">
                        مدیریت هوشمند و تخصصی
                        کلاس‌های مجازی برنامه نویسی
                    </p>
                </div>
                <div className="sectionTwo__items">
                    <img src={imageTwo} alt="management" className="sectionTwo__img mr-bt-sm"/>
                    <p className="sectionTwo__paragraph">
                        ایجاد و تصحیح تکالیف و
                        آزمون‌های تشریحی برنامه نویسی
                    </p>
                </div>
                <div className="sectionTwo__items sectionTwo__items-separated">
                    <img src={imageThree} alt="management" className="sectionTwo__img mr-bt-sm"/>
                    <p className="sectionTwo__paragraph">
                        ارایه سرویس ارزیابی هوشمندانه
                        سورس کدهای برنامه نویسی
                    </p>
                </div>
            </div>
            <div className="sectionTwo__buttons">
                <button className="btn sectionTwo__button mr-lf-sm">بیشتر</button>
                <button className="btn sectionTwo__button">دانلود کاتالوگ</button>
            </div>

        </div>
    )
}

export default SectionTwo