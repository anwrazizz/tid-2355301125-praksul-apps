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
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 font-sans relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-emerald-200/20 rounded-full animate-pulse"></div>
                </div>

                <header className="relative glass shadow-xl rounded-b-3xl animate-slide-up">
                    <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 tracking-tight mb-2 drop-shadow-lg animate-fade-in">
                            Praktikum Susulan - Pertemuan 12
                        </h1>
                        <div className="text-gray-600 text-lg md:text-xl mt-2 font-medium">
                            Backend as a Service dengan Supabase
                        </div>
                    </div>
                </header>

                <nav className="relative mt-8 mx-auto max-w-lg animate-fade-in">
                    <div className="glass rounded-2xl shadow-2xl p-1">
                        <div className="flex space-x-1">
                            {tabs.map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 ${
                                            activeTab === tab.id
                                                ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg transform scale-105'
                                                : 'text-gray-600 hover:bg-white/50 hover:text-gray-800'
                                        }`}
                                    >
                                        <Icon className="mr-2 text-lg" />
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </nav>

                <main className="relative py-12 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        {activeTab === 'documentation' && <Documentation />}
                        {activeTab === 'notes' && <Notes />}
                    </div>
                </main>

                <footer className="relative glass rounded-t-3xl shadow-2xl py-8 mt-20 animate-fade-in">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <p className="text-gray-700 font-bold text-lg mb-2">
                            Praktikum Susulan - Pertemuan 12
                        </p>
                        <p className="text-gray-500 text-base mb-4">
                            Backend as a Service (BaaS) menggunakan React dan Supabase
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                                📁 Repository: tid-2355301017-praksul-apps
                            </span>
                            <span className="flex items-center gap-1">
                                🗄️ Database: Supabase PostgreSQL
                            </span>
                            <span className="flex items-center gap-1">
                                🚀 Deployment: Vercel
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
