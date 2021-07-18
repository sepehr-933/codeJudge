import React from 'react'
import It from "../img/Group 152.png"

const SectionOne = () => {
    return (
        <div className="sectionOne">
           <div className="sectionOne__bgs">
               <div className="sectionOne__content">
                 <h3 className="heading-3 mr-bt-sm">کد جاج</h3>
                 <p className="sectionOne__paragraph mr-bt-md"> یک ارزیاب هوشمند و داینامیک ، پلتفرمی تخصصی برای
                    <br />مدیریت هوشمندانه‌ی کلاس‌های مجازی برنامه نویسی است</p>
                   <button className="btn btn-white">! همین حالا شروع کن</button>
               </div>
               <img src={It} alt="it" className="sectionOne__img" />
           </div>
        </div>
    )
}

export default SectionOne