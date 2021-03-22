import React from 'react'

const GifGridItem = ({title, url}) => {
    // console.log(title, url);
    return (
        <div className="animate__animated animate__bounce animate">
            <img src={ url } alt= {title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
