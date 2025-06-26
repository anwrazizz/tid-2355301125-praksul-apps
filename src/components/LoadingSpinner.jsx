import React from 'react'

export default function LoadingSpinner({ text = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
            {/* Modern 3D Spinner */}
            <div className="relative mb-6">
                {/* Outer ring */}
                <div className="w-16 h-16 rounded-full border-4 border-gray-200 shadow-inner"></div>
                
                {/* Animated rings */}
                <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-emerald-500 animate-spin"></div>
                <div className="absolute inset-1 w-14 h-14 rounded-full border-4 border-transparent border-r-blue-500 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                <div className="absolute inset-2 w-12 h-12 rounded-full border-4 border-transparent border-b-purple-500 animate-spin" style={{animationDuration: '2s'}}></div>
                
                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse"></div>
                </div>
            </div>
            
            {/* Loading text with animated dots */}
            <div className="text-center">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                    {text}
                </div>
                <div className="flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-6 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full animate-loading-bar"></div>
            </div>
        </div>
    )
}
