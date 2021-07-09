import React, {useState, useEffect } from 'react'


export default function UseEffect() {
    const [data, setdata] = useState(0);
    useEffect(() => {
       document.title= `you clicked  ${data} times`
    }, )
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setdata(data+1)}>click me now</button>
        </div>
    )
}
