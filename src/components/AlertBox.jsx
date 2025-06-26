import React, { useState, useEffect } from 'react'
import { BsCheckCircle, BsExclamationTriangle, BsInfoCircle, BsX } from 'react-icons/bs'

export default function AlertBox({ type = "info", children, onClose, autoClose = true }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                setIsVisible(false)
                if (onClose) onClose()
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [autoClose, onClose])

    const handleClose = () => {
        setIsVisible(false)
        if (onClose) onClose()
    }

    const styles = {
        success: {
            icon: <BsCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />, 
            class: "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-800",
            bgIcon: "bg-emerald-500"
        },
        error: {
            icon: <BsExclamationTriangle className="text-red-500 text-xl flex-shrink-0" />, 
            class: "from-red-50 to-red-100 border-red-200 text-red-800",
            bgIcon: "bg-red-500"
        },
        info: {
            icon: <BsInfoCircle className="text-blue-500 text-xl flex-shrink-0" />, 
            class: "from-blue-50 to-blue-100 border-blue-200 text-blue-800",
            bgIcon: "bg-blue-500"
        },
    }
    
    const style = styles[type] || styles.info

    if (!isVisible) return null

    return (
        <div className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className={`flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-sm bg-gradient-to-r ${style.class} max-w-md animate-slide-up`}>
                {/* Icon with background */}
                <div className={`${style.bgIcon} rounded-full p-1 flex items-center justify-center`}>
                    <div className="text-white text-sm">
                        {React.cloneElement(style.icon, { className: "text-white text-sm" })}
                    </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-relaxed break-words">
                        {children}
                    </p>
                </div>
                
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="flex-shrink-0 ml-2 p-1 rounded-full hover:bg-black/10 transition-colors"
                    title="Tutup notifikasi"
                >
                    <BsX className="text-lg" />
                </button>
            </div>
            
            {/* Progress bar for auto-close */}
            {autoClose && (
                <div className="mt-1 mx-5">
                    <div className="h-1 bg-black/10 rounded-full overflow-hidden">
                        <div 
                            className={`h-full ${style.bgIcon} rounded-full animate-progress`}
                            style={{
                                animation: 'progress 5s linear forwards'
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
