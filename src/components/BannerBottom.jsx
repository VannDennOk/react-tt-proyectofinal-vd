import React from 'react'
import { databanner } from '../utils/databanner'
import './styles/BannerBottom.css'

const BannerBottom = () => {

    return (

        <section className="banner_container">
            {databanner.map((item, index) => (
                <div key={index} className="banner_box">
                    <img className='banner_img' src={item.imgUrl} alt={item.alt} />
                    <div className='banner_txt-box'>
                        <p className='banner_txt'>{item.line1}</p>
                        <p className='banner_txt-strong'>{item.line2}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default BannerBottom
