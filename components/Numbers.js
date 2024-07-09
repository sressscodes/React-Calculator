import React, { useState } from 'react'

const Numbers = () => {

  const [a, setA] = useState()
  const [b, setB] = useState()

  const [choice, setChoice] = useState()

  let choosed;
  
  if (choice=="add") {
    choosed = a+b
  } else if (choice=="sub") {
    choosed = a-b
  } else if (choice=="mul") {
    choosed = a*b
  } else if (choice=="div") {
    choosed = a/b
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='mt-10'>
      <div className='text-amber-800 font-medium text-6xl pt-10 text-center'>
        {choosed}
      </div>
      <div className='flex flex-row justify-center mt-10'>
        <input className='bg-white px-4 py-2 border-amber-800 border-2 rounded-lg mr-10' placeholder='First number'
        value={a}
        
        onChange={(e)=>setA(Number(e.target.value))}
        />
        <input className='bg-white px-4 py-2 border-amber-800 border-2 rounded-lg' placeholder='Second number'
        value={b}
        onChange={(e)=>setB(Number(e.target.value))}
        />
      </div>
      <div className='flex justify-center mt-10 gap-10'>
        <button onClick={() => setChoice("add")} className='bg-amber-800 text-white px-4 py-2 rounded-lg'>Addition</button>
        <button onClick={() => setChoice("sub")} className='bg-amber-800 text-white px-4 py-2 rounded-lg'>Subtraction</button>
        <button onClick={() => setChoice("mul")} className='bg-amber-800 text-white px-4 py-2 rounded-lg'>Multiplication</button>
        <button onClick={() => setChoice("div")} className='bg-amber-800 text-white px-4 py-2 rounded-lg'>Division</button>
      </div>
    </form>
  )
}

export default Numbers