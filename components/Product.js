import {useState} from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Product({front_image}) {
    const [loading,setLoading] = useState(true)
  return (
    <div className='p-1 h-full'>
        <div className='relative bg-gray-200 h-full'>
            <LazyLoadImage src={front_image}
                alt="Product"
                effect="blur"
                afterLoad={()=>setLoading(false)}
            />
            {loading ? (<div className='text-xl text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</div>):(<></>)}
            
        </div> 
    </div>
  )
}

export default Product