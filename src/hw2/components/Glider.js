import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";


function Glider({ options, bullets, children }) {
    let glider;
    let slider = useRef();

    useEffect(() => {
        glider = new Glide(slider.current, options).mount();

        return () => {
            glider.destroy();
        }
    });

    return (
        <div ref={slider} className="glide" id="glide1">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {children.map((img, i) => <li className="glide__slide" key={i}>{img}</li>)}
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
            {bullets &&
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    {children.map((_, i) => <button key={i} className="glide__bullet" data-glide-dir={`=${i}`} />)}
                </div>
            }
        </div>
    );
}

Glider.propTypes = {
    children: PropTypes.array
}

export default Glider;