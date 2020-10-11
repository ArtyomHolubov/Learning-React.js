import React from 'react';
import Glider from './../../hw2/components/Glider';
import { useParams } from 'react-router-dom';
import useData from './../hooks/useData';

function AlbumPhotos() {
  const { albumId } = useParams();
  const [photos, isFetchingAlbumsPhotos] = useData(`albums/${albumId}/photos`, []);

  return (
    <>
      {!isFetchingAlbumsPhotos && photos.length ?
        <Glider options={{ autoplay: 2000, type:'carousel', perView: 3 }} bullets="true">
          {photos.map((img, i) => <img key={i} src={img.url} alt="" />)}
        </Glider> : null
      }
    </>
  );
}

export default AlbumPhotos;