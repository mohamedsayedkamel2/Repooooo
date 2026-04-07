import React, { useState, useEffect } from 'react'
import { Heart, Code, Sparkles, Globe, Rocket, Star } from 'lucide-react'

const HelloWorld = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleHeartClick = () => {
    setClickCount(prev => prev + 1)
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className={`max-w-4xl w-full transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Main Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 sm:p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded-full">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Hello, World!
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Welcome to your first React application - where amazing projects begin!
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-12">
            {/* Live Clock */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center bg-gray-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base text-gray-600 font-medium">
                  Current Time: {formatTime(currentTime)}
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Modern React
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Built with React 18, Vite, and modern hooks
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Lightning Fast
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Powered by Vite for instant hot reload
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Production Ready
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Optimized and ready for deployment
                </p>
              </div>
            </div>

            {/* Interactive Section */}
            <div className="text-center bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                Interactive Demo
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Click the heart below to see React state management in action!
              </p>
              
              <button
                onClick={handleHeartClick}
                className="group inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200"
              >
                <Heart 
                  className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 transition-all duration-300 ${
                    clickCount > 0 ? 'fill-current' : ''
                  } group-hover:scale-110`} 
                />
                <span className="text-base sm:text-lg font-medium">
                  {clickCount === 0 ? 'Click me!' : `Clicked ${clickCount} time${clickCount === 1 ? '' : 's'}!`}
                </span>
              </button>

              {clickCount > 0 && (
                <div className="mt-4 sm:mt-6 animate-bounce">
                  <p className="text-base sm:text-lg text-gray-700">
                    🎉 Great! You've interacted with React state!
                  </p>
                </div>
              )}
            </div>

            {/* Footer Message */}
            <div className="text-center mt-8 sm:mt-12">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                This is your starting point for building amazing React applications. 
                <span className="font-semibold text-gray-800"> Happy coding!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelloWorld