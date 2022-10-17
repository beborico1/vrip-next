import Header from '../components/Header'
import {useState, useEffect, useRef} from 'react'
import { doc, getDoc, collection, getDocs, limit, query, startAfter, where } from 'firebase/firestore'
import { db } from '../firebase'
import Product from '../components/Product'
import { ref } from 'firebase/storage'

function BrandPage({brand}) {
  const [products,setProducts] = useState([])
  const [moreProductsToLoad,setMoreProductsToLoad] = useState(false)
  const [searchParams,setSearchParams] = useState({})
  const productsCollectionRef = collection(db,`brands/${brand.id}/products`)
  const bottomRef = useRef()
  var reachedBottom = useOnScreen(bottomRef)

  const loadProducts = async () => {
    const gender = null
    if (gender === null) {
        const q = query(productsCollectionRef, where("brand_id", "==", `${brand.id}`),limit(12))
        const data = await getDocs(q)
        if (data.docs.length===0){
          setMoreProductsToLoad(false)
        } else {
          setMoreProductsToLoad(true)
        }
        setProducts(data.docs)
    } else {
        const q = query(productsCollectionRef, where("brand_id", "==", `${brand.id}`),where("gender","==",`${gender}`),limit(12))
        const data = await getDocs(q)
        if (data.docs.length===0){
          setMoreProductsToLoad(false)
        } else {
          setMoreProductsToLoad(true)
        }
        setProducts(data.docs)
    }
  }

  const loadMoreProducts = async () => {
    if (products.length === 0) {
      return
    }
    const lastProduct = products[products.length-1]
    const gender = null
    if (gender === null) {
        const q = query(productsCollectionRef, where("brand_id", "==", `${brand.id}`),limit(12),startAfter(lastProduct))
        const data = await getDocs(q)
        if (data.docs.length===0){
            setMoreProductsToLoad(false)
        }
        setProducts([...products, ...data.docs])
    } else {
        const q = query(productsCollectionRef, where("brand_id", "==", `${brand.id}`),where("gender","==",`${gender}`),limit(12),startAfter(lastProduct))
        const data = await getDocs(q)
        if (data.docs.length===0){
            setMoreProductsToLoad(false)
        }
        setProducts([...products, ...data.docs])
    }
  }

  useEffect(() => {
    loadProducts()
  },[searchParams])

  useEffect(() => {
    loadMoreProducts()
},[reachedBottom])

  return (
    <div>
      <Header />
    <div className='bg-white rounded-lg mx-2 mt-4'>
      <div className='p-6'>
        <div className='flex mb-4 justify-between items-center'>
            <div className='flex cursor-pointer'>
              <img alt="" className="shadow-lg rounded-full h-12 w-12 mr-3 border" src={brand.icon_url}/>
              <div>
                <h3 className='font-medium'>{brand.name}</h3>
                <h3 className='text-sm text-gray-500'>@{brand.id}</h3>
              </div>
            </div>
            <div>
              <a className="rounded-lg bg-gray-100 px-3 py-1.5 hover:bg-gray-200 text-sm font-semibold" href={brand.website}>Visit Website</a>
            </div>
        </div>
        <div className='text-sm mb-3'>
          {brand.description}
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3'>
        {products.map(product => (
          <Product
            key={product.id}
            front_image={product.data().front_image}
          />
        ))}
      </div>
      <div ref={bottomRef}/>
      {moreProductsToLoad ? (
        <div className='text-center my-4 text-gray-500 text-xl'>Loading More Products...</div>
      ):(<></>)}
      </div>
    </div>
  )
}

export default BrandPage

export async function getServerSideProps(context) {
  const id = context.params.brand
  const brandCollectionRef = doc(db,`brands/${id}`)
  const snapshot = await getDoc(brandCollectionRef)
  const data = snapshot.data()

return {
      props: {
          brand: data,
      },
  }
}

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  try {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
  } catch (exceptionVar){
    console.log(exceptionVar)
  } finally {
    return isIntersecting
  }
}