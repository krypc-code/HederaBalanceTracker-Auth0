import React from 'react'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='relative flex items-center justify-center h-70vh flex-col 'style={{}}>
          <div className="relative flex items-center justify-center h-screen flex-col" style={{ background: 'url("https://krypcore.com/static/media/banner-bcg.96ca5c5f9f2ad960a737.png") no-repeat center/contain', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', position: "relative", top: "-10vh",zIndex:"-1" }} >
              <h1 className="text-xl sm:text-5xl md:text-5xl font-bold text-white my-10 sm:my-14 md:my-20">Track Your Hedera Balance Securely</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-6 sm:mb-8 md:mb-10">Manage Your Hedera Balance</p>
          <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="text-white text-lg sm:text-xl md:text-2xl font-semibold px-6 sm:px-8 py-2 sm:py-3 md:py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4 sm:mb-0">Get started for free</button>
              <button className="text-white text-lg sm:text-xl md:text-2xl font-semibold px-6 sm:px-8 py-2 sm:py-3 md:py-3.5 rounded-full border border-white flex items-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>View docs</span>
              </button> */}
          </div>
      </div>
      </div>




  )
}

export default Home