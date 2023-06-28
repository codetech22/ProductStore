import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getProducts = async () => {
    const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
    setData(res.data)
  }

  useEffect(() => {
    getProducts()
  }, [])


  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    setFilter(data.filter(ele => ele.title.includes(search)))
  }, [search])

  return (
    <div>
      <h1 style={{padding:"5px"}}>Products</h1>
      <div>
        <input type="text" color='red' value={search} onChange={(e) => setSearch(e.target.value)}  style={{borderColor:"red",border:"2px solid black",padding:"5px"}}/>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {
          filter.map((e , index) => (
            <a key={index} href="#" className="group relative block bg-black">
              <img
                alt="Developer"
                src={e.images[1]}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  {e.title}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">{e.title}</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p className="text-sm text-white">
                      {e.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>

          ))
        }
      </div>
    </div>
  )
}

export default App


