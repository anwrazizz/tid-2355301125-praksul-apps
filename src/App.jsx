import React, { useState } from 'react'
import { BsBook, BsFileText } from 'react-icons/bs'
import Documentation from './components/Documentation'
import Notes from './components/Notes'
import './index.css'

function App() {
    const [activeTab, setActiveTab] = useState('documentation')

    const tabs = [
        { id: 'documentation', label: 'Dokumentasi', icon: BsBook },
        { id: 'notes', label: 'Notes App', icon: BsFileText }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] text-white font-sans relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-24 right-24 w-64 h-64 border border-[#00f2ff33] rounded-3xl rotate-45 animate-pulse"></div>
                <div className="absolute bottom-24 left-24 w-80 h-80 border border-[#ff00ff33] rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#ffffff11] rounded-2xl rotate-12 animate-ping"></div>
            </div>

            <header className="relative z-10 bg-[#1c1c1c]/80 backdrop-blur-md shadow-xl border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                        Praktikum Susulan
                    </h1>
                    <p className="text-xl mt-4 text-gray-300">Pertemuan 12</p>
                    <p className="text-base text-gray-400">Backend as a Service dengan Supabase</p>
                </div>
            </header>

            <nav className="relative z-10 mt-10 mx-auto max-w-2xl">
                <div className="bg-[#252525]/80 backdrop-blur rounded-3xl shadow-lg border border-gray-700 p-2">
                    <div className="flex space-x-2 justify-center">
                        {tabs.map((tab) => {
                            const Icon = tab.icon
                            const isActive = activeTab === tab.id
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 focus:outline-none ${
                                        isActive
                                            ? 'bg-gradient-to-r from-teal-400 to-purple-500 text-black shadow-xl scale-105'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                                >
                                    <Icon className="mr-3 text-2xl" />
                                    {tab.label}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </nav>

            <main className="relative z-10 py-12 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {activeTab === 'documentation' && <Documentation />}
                    {activeTab === 'notes' && <Notes />}
                </div>
            </main>

            <footer className="relative z-10 bg-[#1c1c1c]/80 backdrop-blur-md border-t border-gray-800 shadow-inner py-10 mt-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-2xl font-bold text-white mb-2">
                        Praktikum Susulan - Pertemuan 12
                    </p>
                    <p className="text-base text-gray-400 mb-8">
                        Backend as a Service (BaaS) menggunakan React dan Supabase
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-[#2e2e2e] px-4 py-3 rounded-xl text-sm text-gray-400">
                            📁 Repository: tid-2355301125-praksul-apps
                        </span>
                        <span className="bg-[#2e2e2e] px-4 py-3 rounded-xl text-sm text-gray-400">
                            🗄️ Database: Supabase PostgreSQL
                        </span>
                        <span className="bg-[#2e2e2e] px-4 py-3 rounded-xl text-sm text-gray-400">
                            🚀 Deployment: Vercel
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
