import React from "react";
import ImageGalleryItem from '../ImageGalleryItem';
import style from './styles/imageGallery.module.scss'



const ImageGallery=({imgGallery,onClickImg}) => (
    <ul className={style.ImageGallery}>
<ImageGalleryItem imgGallery={imgGallery} onClickImg={onClickImg} />
    </ul>
)


export default ImageGallery;