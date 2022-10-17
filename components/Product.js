import {useState} from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Product({front_image}) {
    const [loading,setLoading] = useState(true)
  return (
    <div className='p-1'>
        <div className=' relative bg-gray-200'>
            {loading ? (<div className='text-xl text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</div>):(<></>)}
            <LazyLoadImage src={front_image}
                width={300} height={300}
                alt="Product"
                effect="blur"
                afterLoad={()=>setLoading(false)}
            />
        </div> 
    </div>
  )
}

export default Product