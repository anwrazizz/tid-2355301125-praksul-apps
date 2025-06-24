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
            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow-lg">
                    <div className="max-w-6xl mx-auto px-6 py-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            Praktikum Susulan - Pertemuan 12
                        </h1>
                        <div className="text-gray-600 mt-1 space-y-1">
                            <p>Backend as a Service dengan Supabase</p>
                        </div>
                    </div>
                </header>

                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex space-x-8">
                            {tabs.map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                                            activeTab === tab.id
                                                ? 'border-emerald-500 text-emerald-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        <Icon className="mr-2" />
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </nav>

                <main className="py-8">
                    {activeTab === 'documentation' && <Documentation />}
                    {activeTab === 'notes' && <Notes />}
                </main>

                <footer className="bg-gray-800 text-white py-8 mt-12">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <p className="text-gray-300">
                            Praktikum Susulan - Pertemuan 12
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                            Pertemuan 12: Backend as a Service (BaaS) menggunakan React dan Supabase
                        </p>
                        <div className="mt-3 text-xs text-gray-500">
                            <span>Repository: tid-2355301119-praksul-apps</span> | 
                            <span> Database: Supabase PostgreSQL</span> | 
                            <span> Deployment: Vercel</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
