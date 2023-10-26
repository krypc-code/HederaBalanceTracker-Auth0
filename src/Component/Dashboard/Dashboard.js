import React from 'react'

const Dashboard = ({balance,address}) => {
  return (
    <div class="flex md:flex-row text-white justify-evenly mt-10 flex-col align-center">
      <div class="w-1/3 overflow-hidden relative bg-gradient-to-t from-gray-800 to-gray-800 border-2 border-opacity-0.8 border-gray-300 rounded-2xl shadow-lg flex flex-col font-montserrat h-124 p-5 mr-4">
        <div class="flex items-center justify-between">
          <div class="text-gray-300 text-2xl font-bold">  Balance </div>
        </div>
        <div class="text-gray-300 text-sm font-medium pt-3">{balance}</div>
      </div>
      <div class="w-1/3 overflow-hidden relative bg-gradient-to-t from-gray-800 to-gray-800 border-2 border-opacity-0.8 border-gray-300 rounded-2xl shadow-lg flex flex-col font-montserrat h-124 p-5 mr-4">
        <div class="flex items-center justify-between">
          <div class="text-gray-300 text-2xl font-bold"> User Address</div>
        </div>
        <div class="text-gray-300 text-sm font-medium pt-3"> {address} </div>
      </div>

      
    </div>


  )
}

export default Dashboard