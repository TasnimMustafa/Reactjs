import React,{useEffect, useState} from "react";

function App() {
  const [items,setItems] = useState([]);
  const [limit,setLimits] = useState(4);
  const [loading,setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true)
    fetch('https://5f7146ed64a3720016e603e1.mockapi.io/api/student?page=1&limit='+limit)
        .then((res)=>res.json())
        .then((data)=>setItems(data))
    setLoading(false)

  },[limit]);

  const loadmore = () => {
    setLimits(limit+4);
  };

  return (
    <div className="App">
        <div className='container'>
          <div className='row m-0'>
            {
              items.map(item=>(
                  <div className='col-md-3 col-12 p-3' key={item.id}>
                    <div className='bg-danger p-4'>
                      <h2>user : {item.id}</h2>
                      <h4>{item.name}</h4>
                      <h5>{item.age}</h5>
                    </div>
                  </div>
              ))
            }

            <div className='col-12 p-3 d-flex justify-content-center'>
              <button className='btn btn-primary' onClick={loadmore}>{loading? 'Loading...':'Load More'}</button>
            </div>
          </div>

        </div>
    </div>
  );
}

export default App;
