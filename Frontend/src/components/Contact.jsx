import React from 'react'

function Contact() {
  return (
  <>
  <div className="flex h-screen items-center justify-center">
    <div>
    <h2 className="font-bold text-xl">Contact Us</h2>
    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br />
        <input type="text" 
        placeholder="Enter your name" 
        className="w-80 px-3 py-1 border rounded-md outline-none"
       />
    </div>
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br />
        <input type="email" 
        placeholder="Email address" 
        className="w-80 px-3 py-1 border rounded-md outline-none"
       />
       </div>
       <div className="mt-4 space-y-2">
        <span>Message</span>
        <br />
        <textarea
        placeholder="Type your message" 
        className="w-full resize-y px-3 py-1 border rounded-md outline-none "
        
       ></textarea>
       </div>

       {/* {Button} */}
    <div className="flex  mt-4">
        <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">Submit</button>
       
       
    </div>
       

    </div>
  </div>
  </>
  )
}

export default Contact;
