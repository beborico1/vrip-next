import { useRouter } from 'next/router'

function Brand({brand}) {
    const router = useRouter()
  return (
    <div className="rounded-lg mb-3 items-center bg-white shadow-md px-7 py-5" key={brand.id}>
            <div className='flex mb-4 justify-between items-center'>
              <div className='flex'>
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
            <div>
                <button onClick={()=>router.push(`/${brand.id}`)} className='font-semibold w-full py-2 hover:text-gray-800'>Visit</button>
              </div>
            </div>
  )
}

export default Brand