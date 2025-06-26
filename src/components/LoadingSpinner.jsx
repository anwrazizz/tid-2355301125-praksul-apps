import React from 'react'

export default function LoadingSpinner({ text = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            {/* Modern Dark Spinner */}
            <div className="relative mb-8">
                {/* Outer ring */}
                <div className="w-20 h-20 rounded-full border-4 border-surface-light shadow-dark"></div>
                
                {/* Animated rings */}
                <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-primary animate-spin shadow-glow"></div>
                <div className="absolute inset-1 w-16 h-16 rounded-full border-4 border-transparent border-r-secondary animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                <div className="absolute inset-2 w-12 h-12 rounded-full border-4 border-transparent border-b-cyan-400 animate-spin" style={{animationDuration: '2s'}}></div>
                
                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-primary rounded-full animate-pulse-glow"></div>
                </div>
            </div>
            
            {/* Loading text with animated dots */}
            <div className="text-center">
                <div className="text-h4 text-text-primary mb-4">
                    {text}
                </div>
                <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-8 w-64 h-2 bg-surface-light rounded-full overflow-hidden">
                <div className="h-full bg-gradient-primary rounded-full animate-loading-bar shadow-glow"></div>
            </div>
        </div>
    )
}