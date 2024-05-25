import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" width={'100%'} height={'400px'} src="https://www.therugmaker.com.sg/wp-content/uploads/2021/11/Rugmaker_Blog-Piece-SideImages_luxury-and-fashionable-brand-new-interior-of-cloth-store.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">My Garments      
      </h1>
      <p className="mb-8 leading-relaxed text-indigo-500"> A garment is a piece of clothing; used especially in contexts where you are talking about the manufacture or sale of clothes. Many of the garments have the customers' name tags sewn into the linings. Synonyms: clothes, wear, dress, clothing More Synonyms of garment..</p>
<div className="flex justify-center">
  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore More</button>
</div>

    </div>
  </div>
</section>

    </>
  )
}

export default Hero