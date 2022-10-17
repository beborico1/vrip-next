import {useState} from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Product({front_image}) {
  return (
    <div className='p-1'>
        <div className='relative'>
            <div className=''>
                <LazyLoadImage src={front_image}
                    className="bg-gray-200"
                    alt="Product"
                    effect="blur"
                    afterLoad={}
                />
            </div>
        </div> 
    </div>
  )
}

export default Product