import React from 'react'
import GetImages from './GetImages'

function Gallery({category}) {
  return (
    <div className='bg-slate-950 flex pb-12 py-6 justify-center gap-4 w-full px-6'>
      <GetImages category ={category}/>
   </div>
  )
}

export default Gallery
