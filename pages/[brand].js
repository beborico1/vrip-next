import React, {useState} from 'react'
import { doc, getDoc, getDocs, collection, query, limit } from 'firebase/firestore'
import { db } from '../firebase'
import Header from '../components/Header'
import Image from "next/image"

function BrandPage({brand, products}) {
  const [productsLoaded,setProductsLoaded] = useState(products)
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
                {productsLoaded.map(product => (
                  <div key={product.id} className="h-full">

                  <div className="p-1 h-full">
                      <div className='flex justify-center w-full bg-gray-300'>
                          <img className="object-contain w-full" alt="Product" src={product.front_image}/>                    
                      </div>
                  </div>
      
                      
                  </div>
                ))}
        </div>
    </div>
    </div>
  )
}

export default BrandPage

export async function getServerSideProps(context) {
  console.log("sd")
  const id = context.params.brand
  const brandCollectionRef = doc(db,`brands/${id}`)
  const snapshot = await getDoc(brandCollectionRef)
  const data = snapshot.data()

  const productsCollectionRef = collection(db,`brands/${id}/products`)
  const q = query(productsCollectionRef,limit(12))
  const snapshot2 = await getDocs(q)


  const products = snapshot2.docs.map(doc => (
    {id:doc.id,...doc.data()}
  ))

return {
      props: {
          brand: data,
          products,
      },
  }
}