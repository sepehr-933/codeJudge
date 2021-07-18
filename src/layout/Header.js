import React, { useRef, useEffect}  from 'react'
import logo from '../img/logo-footer@2x.png'

export default function Header({show, setShow}) {

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setShow(false)
        })
    })

    const ref = useRef()
    console.log(show);

    return (
        <div ref={ref} className='header'>
            <div onClick={() => setShow(!show)} className={`header__menu`}></div>
            <img className="header__logo" alt="logo" src={logo}/>
            <div className={`header__navbar ${show ? 'show' : null}`}>
            <button className="header__button">صفحه اصلی</button>
            <button className="header__button">معرفی سرویس</button>
            <button className="header__button">خدمات ما</button>
            <button className="header__button">راهکارهای توسعه</button>
            <button className="header__button">چرا ما ؟</button>
            <button className="header__button">مشتریان ما</button>
            <button className="header__button">سوالات متداول</button>
            <button className="header__button">درباره ما</button>
            <button style={{width:"max-content"}} className="btn">ورود / ثبت نام</button>
            </div>



        </div>
    )
}