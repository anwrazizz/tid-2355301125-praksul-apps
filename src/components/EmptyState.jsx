import React, { useState } from 'react'
import { BsDatabaseExclamation, BsPlus, BsFileText, BsStars } from "react-icons/bs"

export default function EmptyState({ text = "Belum ada data", actionText, onAction }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center py-20 px-8 animate-fade-in">
            {/* Animated illustration */}
            <div className="relative mb-8">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100 rounded-full opacity-50 animate-pulse"></div>
                
                {/* Main icon */}
                <div 
                    className={`relative z-10 transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100'}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl">
                        <BsDatabaseExclamation className="text-4xl text-white" />
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                        <BsStars className="text-white text-xs" />
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
            </div>
            
            {/* Content */}
            <div className="text-center space-y-4 max-w-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Oops! Kosong Nih 📭
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {text}
                </p>
                
                {/* Suggestions */}
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-100">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <BsFileText className="text-emerald-500" />
                        <span className="text-sm font-semibold text-gray-700">Saran untuk Anda:</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Coba buat catatan pertama Anda</li>
                        <li>• Gunakan form di sebelah kiri</li>
                        <li>• Mulai dengan ide sederhana</li>
                    </ul>
                </div>
                
                {/* Call to action */}
                {actionText && onAction && (
                    <button
                        onClick={onAction}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <BsPlus className="text-lg" />
                        {actionText}
                    </button>
                )}
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
        </div>
    )
}
