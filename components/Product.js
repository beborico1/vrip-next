import {useState} from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Product({front_image}) {
    const [loading,setLoading] = useState(true)
  return (
    <div className='p-1'>
        <div className='relative'>
            <div className=''>
                <LazyLoadImage src={front_image}
                    className="bg-gray-200"
                    alt="Product"
                    effect="blur"
                    afterLoad={()=>setLoading(false)}
                />
            {loading ? (<div className='w-full aspect-square flex flex-col items-center text-center bg-gray-200 text-xl text-gray-500 absolute'><div>Loading...</div></div>):(<></>)}
            </div>
        </div> 
    </div>
  )
}

export default Product