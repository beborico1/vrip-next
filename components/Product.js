import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Product({front_image}) {
  return (
        <LazyLoadImage src={front_image}
            alt="Product"
            effect="blur"
        />
  )
}

export default Product