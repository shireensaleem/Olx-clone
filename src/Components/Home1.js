import React from 'react'

import './Home.css'
import Products from './Products'





function Home() {
  return (
    <div className='home-div'>
      <div className='Quick-row'>
        <div className='Right-align'><h3 className='Right-align'>More on cars</h3></div>
      
      
      <Products id="123321" image="https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/b061866b-d0c6-45ab-9f4c-ff87f423792d/71f42cf6-ad06-40bf-b35b-7702c4654a10.jpg" price={'120000'} descrip={`MAKE : KIA
MODEL : Carnival D2 28AT Limousine Plus


COLOR: White`} year={'2018'} km={129900} />
<Products id="123321" image="https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/b061866b-d0c6-45ab-9f4c-ff87f423792d/71f42cf6-ad06-40bf-b35b-7702c4654a10.jpg" price={'120000'} descrip={`MAKE : KIA
MODEL : Carnival D2 28AT Limousine Plus


COLOR: White`} year={'2018'} km={129900} />



      </div>
      <div className='recommentations'>
      <Products id="123321" image="https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/b061866b-d0c6-45ab-9f4c-ff87f423792d/71f42cf6-ad06-40bf-b35b-7702c4654a10.jpg" price={'120000'} descrip={`MAKE : KIA
MODEL : Carnival D2 28AT Limousine Plus


COLOR: White`} year={'2018'} km={129900} />

<Products id="123321" image="https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/b061866b-d0c6-45ab-9f4c-ff87f423792d/71f42cf6-ad06-40bf-b35b-7702c4654a10.jpg" price={'120000'} descrip={`MAKE : KIA
MODEL : Carnival D2 28AT Limousine Plus


COLOR: White`} year={'2018'} km={129900} />

<Products id="123321" image="https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/b061866b-d0c6-45ab-9f4c-ff87f423792d/71f42cf6-ad06-40bf-b35b-7702c4654a10.jpg" price={'120000'} descrip={`MAKE : KIA
MODEL : Carnival D2 28AT Limousine Plus


COLOR: White`} year={'2018'} km={129900} />


      </div>
      
      
      
    </div>
  )
}

export default Home
