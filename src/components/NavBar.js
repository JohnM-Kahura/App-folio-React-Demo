import React from 'react'

function NavBar() {
  return (
    <header class=" sticky top-0 z-50 text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span class="ml-3 text-4xl font-bold">Quiz App</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base  justify-center">
      
    </nav>
    <button class="inline-flex items-center bg-blue-500 border-0 py-1 px-3  focus:outline-none  hover:bg-blue-200 rounded text-base text-black-600 mt-4 md:mt-0">
        <a href='https://github.com/JohnM-Kahura' target="_blank">
        Get APK
        </a>
        
      
    </button>
  </div>
</header>

  )
}

export default NavBar