import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id)=>
  {
  const newtours = tours.filter((tour) => tour.id !== id)
  setTours (newtours)
  }
  const fetchTours = async () =>{
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
      console.log(tours)

    } catch (error) {
      setLoading(false)
      console.log(error);
    }
    
    
  };

useEffect(() => {
fetchTours();
},[])
if(tours.length==0){
  return(
    <section>
      <div className='title'>
        <h4>NO TOURS LEFT</h4>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    </section>
  )
}
if (loading) {
  return(
    <main>
      <Loading/>
    </main>
  )
}
  return(
     <section>
     <Tours tours={tours} removeTour={removeTour}/>
     </section>
  )
    }

export default App
