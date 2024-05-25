import React from 'react'

const Ecommerce = () => {


   const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  return (
<>
   
  
   <section  className="bg-gray-900 text-gray-400 body-font">
   <div className="container mx-auto py-12">
           <h2 className="text-3xl font-bold mb-6 text-center font-indigo-500">Best Sellers Clothes</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               
               <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVKUBEd1YNHkrVhqJr-O6rAPLppVM5plVGQ&s" alt="Product 1" className="w-full h-64 object-cover object-center"/>
                   <div className="p-4">
                       <h3 className="text-lg font-semibold mb-2">Product 1</h3>
                       <p className="text-gray-600">$99.99</p>
                       <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                   </div>
               </div>
               
               <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg11rG9N_qizYif-BACxxL_RbzxEsRv_5Ms6m7qE1Lrg&s" alt="Product 2" className="w-full h-64 object-cover object-center"/>
                   <div className="p-4">
                       <h3 className="text-lg font-semibold mb-2">Product 2</h3>
                       <p className="text-gray-600">$79.99</p>
                       <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                   </div>
               </div>
               <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7mAdcnGwKqKeo1jxTebzgRfGQGZD989zFw&s" alt="Product 4" className="w-full h-64 object-cover object-center"/>
                   <div className="p-4">
                       <h3 className="text-lg font-semibold mb-2">Product 3</h3>
                       <p className="text-gray-600">$149.99</p>
                       <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                   </div>
               </div>
               
              
               
               <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUerXqaSXHbQxdK2xtM6p4LpQk_K7Cn7Z_jg&s" alt="Product 4" className="w-full h-64 object-cover object-center"/>
                   <div className="p-4">
                       <h3 className="text-lg font-semibold mb-2">Product 4</h3>
                       <p className="text-gray-600">$149.99</p>
                       <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                   </div>
               </div>
           </div>
       </div>
   </section>
       
   
   
   
      
      </>   
  

  )
}

export default Ecommerce