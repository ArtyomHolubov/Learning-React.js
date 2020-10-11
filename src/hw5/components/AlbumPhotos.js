import React, { useState, useEffect } from 'react';
import Glider from './../../hw2/components/Glider';
import { useParams } from 'react-router-dom';
import imagesData from '../../data/glide-images.json';

function AlbumPhotos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState(Object.assign([], imagesData));
  const [isFetchingUserAlbums, setIsFetchingUserAlbums] = useState(false);

  useEffect(() => {
    setIsFetchingUserAlbums(true);
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(response => response.json())
        .then(photos => {
            setPhotos(photos);
            setIsFetchingUserAlbums(false);
        })
        .catch(err => {
            setIsFetchingUserAlbums(false);
        })
}, [albumId]);

  return (
    <>
      {!isFetchingUserAlbums && photos.length ?
        <Glider options={{ autoplay: 2000, type:'carousel', perView: 3 }} bullets="true">
          {photos.map((img, i) => <img key={i} src={img.url} alt="" />)}
        </Glider> : null
      }
    </>
  );
}

export default AlbumPhotos;