import React, { useEffect, useState } from 'react'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../firebase'
import Brand from './Brand'

function BrandsList() {
  
  const [brands,setBrands] = useState([])
  const brandsCollectionRef = collection(db,"brands")

  const loadBrands = async () => {
    const snapshot = await getDocs(brandsCollectionRef)
    setBrands(snapshot.docs)
  }

  useEffect(()=>{
    loadBrands()
  },[db])

    return (
      <div className='p-2'>
        {brands.map(brand => (
            <Brand key={brand.id} brand={brand.data()}/>
        ))}
        </div>
    )
  }

export default BrandsList
