import React, { useState } from 'react'


export default function UseState() {
    const [name, setName] = useState("Sivaji")
    const [data, setdata] = useState(0);
    return (
        <div>
           <h1>{name}</h1> 
            <button onClick={()=>setName("Siva")}>Click</button>
            {data}
            <button onClick={()=>setdata(data+1)}>Click</button>
             <button onClick={()=>setdata(data-1)}>Click</button>
              <button onClick={()=>setdata(0
                )}>Click</button>
        </div>
    )
}
