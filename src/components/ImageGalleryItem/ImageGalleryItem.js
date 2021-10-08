import React from "react";
import PropTypes from 'prop-types'
import style from './styles/imageGalleryItems.module.scss';


const ImageGalleryItem =({imgGallery,onClickImg}) => (

    <>
        {imgGallery.map(({id, webformatURL, user}) => (
            <li className={style.ImageGalleryItem} key={id}>
                <img src={webformatURL} alt={user} className={style.ImageGalleryItemImage} onClick={()=> onClickImg(id)}/>
            </li>
        ))}
    </>
)

ImageGalleryItem.propTypes ={
    imgGallery:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        webformatURL:PropTypes.string.isRequired,
        user:PropTypes.string.isRequired

    })).isRequired
}

export default ImageGalleryItem;