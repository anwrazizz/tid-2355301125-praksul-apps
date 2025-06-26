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
            icon: <BsCheckCircle className="text-secondary text-xl flex-shrink-0" />, 
            class: "bg-surface border-secondary/30 text-text-primary",
            bgIcon: "bg-secondary"
        },
        error: {
            icon: <BsExclamationTriangle className="text-red-400 text-xl flex-shrink-0" />, 
            class: "bg-surface border-red-400/30 text-text-primary",
            bgIcon: "bg-red-500"
        },
        info: {
            icon: <BsInfoCircle className="text-primary text-xl flex-shrink-0" />, 
            class: "bg-surface border-primary/30 text-text-primary",
            bgIcon: "bg-primary"
        },
    }
    
    const style = styles[type] || styles.info

    if (!isVisible) return null

    return (
        <div className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <div className={`flex items-start gap-4 px-6 py-5 rounded-3xl shadow-dark-lg border backdrop-blur-sm ${style.class} max-w-md animate-slide-up`}>
                {/* Icon with background */}
                <div className={`${style.bgIcon} rounded-full p-1 flex items-center justify-center`}>
                    <div className="text-white text-sm">
                        {React.cloneElement(style.icon, { className: "text-white text-sm" })}
                    </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p className="text-body-sm leading-relaxed break-words">
                        {children}
                    </p>
                </div>
                
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="flex-shrink-0 ml-2 p-2 rounded-2xl hover:bg-surface-light transition-colors"
                    title="Tutup notifikasi"
                >
                    <BsX className="text-xl text-text-secondary" />
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
