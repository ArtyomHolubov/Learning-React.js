import React, { useState } from 'react';
import Glider from './Glider';
import { Checkbox, Radio, Form, Input, Button } from "semantic-ui-react";
import HomeWorkDescription from './../../hw1/components/HomeWorkDescription';
import imagesData from './../../data/glide-images.json';
import Descriptions from '../../data/hw.json';

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

function HomeWork2() {
  const [autoplay, setAutoplay] = useState(false);
  const [type, setType] = useState('carousel');
  const [perView, setPerView] = useState(3);
  const [bullets, setBullets] = useState(true);
  const [images, setImages] = useState(Object.assign([], imagesData));

  const addImage = () => {
    var index = randomInteger(0, 4);
    images.push(imagesData[index]);
    setImages([...images]);
  }

  const removeImage = () => {
    images.pop();
    setImages([...images]);
  }

  return (
    <div id="hw2">
      <h1>Home Work 2</h1>
      <div>
        <HomeWorkDescription data={Descriptions.hw2.description}></HomeWorkDescription>
      </div>
      <br></br>
      <Form>
        <Form.Field>
          <Input value={perView} type='number' onChange={(e) => setPerView(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Autoplay' checked={autoplay} onChange={() => setAutoplay(!autoplay)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='Bullets' checked={bullets} onChange={() => setBullets(!bullets)} />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Carousel'
            name='type'
            value='carousel'
            checked={type === 'carousel'}
            onChange={() => setType('carousel')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Slider'
            name='type'
            value='slider'
            checked={type === 'slider'}
            onChange={() => setType('slider')}
          />
        </Form.Field>
      </Form>
      <br></br>
      <Button onClick={addImage}>+</Button>
      <Button onClick={removeImage}>-</Button>
      {images.length ?
        <Glider options={{ autoplay: autoplay ? 2000 : false, type, perView }} bullets={bullets}>
          {images.map((img, i) => <img key={i} src={img} alt="" />)}
        </Glider> : null
      }
    </div>
  );
}

export default HomeWork2;