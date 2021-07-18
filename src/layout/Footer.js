import React from 'react'
import logo1 from '../img/Logo.png'
import logoAspx from '../img/logo.aspx.png'
import Isfahan from '../img/isfahan1.png'
import iran from  '../img/iran1.png'
import location from '../img/placeholder.png'
import phone from '../img/phone-call.png'
import github from '../img/github.png'
import whatsApp from '../img/006-whatsapp.png'
import linkedIn from '../img/005-linkedin.png'
import twitter from '../img/003-twitter.png'
import instagram from '../img/001-instagram.png'

const Footer = () => {
    return (
        <div className="footer">
           <div className="footer__container">
              <div className="footer__items footer__items-0">
                  <img src={logo1} alt="logo" className="footer__logo-1"/>
                  <p className="footer__paragraph">اولین و تنها سامانه تمرین و آزمون آنلاین در ایران</p>
                  <p className="footer__paragraph">کدجاج یک ارزیاب هوشمند و داینامیک
                      پلتفرمی تخصصی برای مدیریت هوشمندانه‌ی
                      .کلاس‌های مجازی برنامه‌نویسی است</p>
              </div>
               <div className="footer__items footer__items-1">
                   <h5 className="heading-5">کدجاج</h5>
                   <div className="footer__hr"></div>
                   <p className="footer__paragraph">داستان ما</p>
                   <p className="footer__paragraph"> ارتباط با ما</p>
                   <p className="footer__paragraph"> راهنمای راهبری</p>
                   <p className="footer__paragraph"> راهنمای کاربری</p>
                   <p className="footer__paragraph">  وبلاگ</p>
               </div>
               <div className="footer__items footer__items-2">
                   <h5 className="heading-5">لینک‌های مفید</h5>
                   <div className="footer__hr"></div>
                   <p className="footer__paragraph"> شرکت میزان گستر علم و دانش</p>
                   <p className="footer__paragraph"> شرکت علمی و تحقیقاتی اصفهان</p>
                   <p className="footer__paragraph"> دانشگاه صنعتی اصفهان</p>
               </div>
               <div className="footer__logos">
               <img src={logoAspx} alt="logo 2" className="footer__logo"/>
               <img src={Isfahan} alt="isfahan" className="footer__logo"/>
               <img src={iran} alt="iran" className="footer__logo"/>
               </div>
               <div className="footer__items footer__items-3">
                   <h5 className="heading-5">
                       <img src={location} alt="placeholder"/>
                       دفتر مرکزی:
                   </h5>
                   <p className="footer__paragraph">
                       - اصفهان - شهرک علمی و تحقیقاتی اصفهان
                       ساختمان ابوریحان - واحد ۱۳۵
                   </p>
               </div>
               <div className="footer__items footer__items-span">
                   <h5 className="heading-5">
                       <img src={phone} alt="phone call"/>
                       پشتیبانی ۷ روز هفته
                   </h5>
                   <p className="footer__paragraph">
                       ۰۳۱۳۳۳۹۳۲۲۴۰
                   </p>
                   <p className="footer__paragraph">
                       ۰۹۱۳۰۳۹۴۵۲۷
                   </p>
               </div>
               <div className="footer__items footer__items-4">
                   <h5 className="heading-5">
                       ما را در شبکه‌های اجتماعی دنبال کنید
                   </h5>
                   <div className="footer__logo">
                       <img src={github} alt="github" className="mr-lf-tn"/>
                       <img src={whatsApp} alt="whats app" className="mr-lf-tn"/>
                       <img src={linkedIn} alt="linked in" className="mr-lf-tn"/>
                       <img src={twitter} alt="twitter" className="mr-lf-tn"/>
                       <img src={instagram} alt="instagram" />
                   </div>
               </div>
               <div className="footer__copyright">
                   <p className="footer__paragraph">
                       کلیه حقوق این سایت متعلق به
                       .می‌باشد codejudge
                       بهاره داودی
                   </p>
               </div>

           </div>

            <div className="footer__email">
                <p className="footer__paragraph">
                    .برای دریافت پیشنهادات ویژه ایمیل خود را وارد کنید
                </p>
                <div style={{display:"flex", alignItems:"center"}}>
                <input className="footer__input" placeholder="ایمیل خود را وارد کنید" type="text"  />
                <button className="btn footer__button">ارسال</button>
                </div>
            </div>
        </div>
    )
}

export default Footer