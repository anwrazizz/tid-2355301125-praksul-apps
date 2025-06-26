import React, { useState } from 'react'
import { BsDatabaseExclamation, BsPlus, BsFileText, BsStars } from "react-icons/bs"

export default function EmptyState({ text = "Belum ada data", actionText, onAction }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center py-24 px-8 animate-fade-in relative">
            {/* Animated illustration */}
            <div className="relative mb-10">
                {/* Background decoration */}
                <div className="absolute -inset-6 bg-gradient-primary/10 rounded-full opacity-50 animate-pulse"></div>
                
                {/* Main icon */}
                <div 
                    className={`relative z-10 transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="w-28 h-28 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-glow">
                        <BsDatabaseExclamation className="text-5xl text-white" />
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center animate-bounce shadow-glow">
                        <BsStars className="text-white text-sm" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
            </div>
            
            {/* Content */}
            <div className="text-center space-y-6 max-w-lg">
                <h3 className="text-h1 text-text-primary mb-3">
                    Oops! Kosong Nih 📭
                </h3>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                    {text}
                </p>
                
                {/* Suggestions */}
                <div className="mt-8 p-8 bg-surface backdrop-blur-sm rounded-3xl border border-surface-light shadow-dark">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BsFileText className="text-primary text-xl" />
                        <span className="text-h4 text-text-primary">Saran untuk Anda:</span>
                    </div>
                    <ul className="text-body text-text-secondary space-y-2">
                        <li>• Coba buat catatan pertama Anda</li>
                        <li>• Gunakan form di sebelah kiri</li>
                        <li>• Mulai dengan ide sederhana</li>
                    </ul>
                </div>
                
                {/* Call to action */}
                {actionText && onAction && (
                    <button
                        onClick={onAction}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary hover:shadow-glow text-white text-h4 rounded-3xl transition-all duration-300 hover:scale-105 shadow-dark"
                    >
                        <BsPlus className="text-2xl" />
                        {actionText}
                    </button>
                )}
            </div>
        </div>
    )
}