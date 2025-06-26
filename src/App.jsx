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
            <div className="min-h-screen bg-gradient-dark font-sans relative overflow-hidden">
                {/* Background geometric patterns */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-3xl rotate-45 animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 border border-secondary/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/10 rounded-2xl rotate-12 animate-pulse-glow"></div>
                </div>

                <header className="relative bg-surface/90 backdrop-blur-sm shadow-dark-lg border-b border-surface-light animate-slide-up">
                    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center">
                        <h1 className="text-display text-transparent bg-clip-text bg-gradient-primary tracking-tight mb-4 drop-shadow-lg animate-fade-in">
                            Praktikum Susulan
                        </h1>
                        <div className="text-h1 text-text-primary mb-3">
                            Pertemuan 12
                        </div>
                        <div className="text-body-lg text-text-secondary">
                            Backend as a Service dengan Supabase
                        </div>
                    </div>
                </header>

                <nav className="relative mt-10 mx-auto max-w-2xl animate-fade-in">
                    <div className="bg-surface/80 backdrop-blur-sm rounded-3xl shadow-dark-lg border border-surface-light p-2">
                        <div className="flex space-x-2">
                            {tabs.map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center px-8 py-4 rounded-2xl text-h4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                                            activeTab === tab.id
                                                ? 'bg-gradient-primary text-black shadow-glow transform scale-105'
                                                : 'text-text-secondary hover:bg-surface-light hover:text-text-primary'
                                        }`}
                                    >
                                        <Icon className="mr-3 text-xl" />
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

                <footer className="relative bg-surface/90 backdrop-blur-sm border-t border-surface-light shadow-dark-lg py-10 mt-20 animate-fade-in">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
                        </div>
                        <p className="text-h3 text-text-primary mb-3">
                            Praktikum Susulan - Pertemuan 12
                        </p>
                        <p className="text-body-lg text-text-secondary mb-8">
                            Backend as a Service (BaaS) menggunakan React dan Supabase
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <span className="flex items-center gap-2 bg-surface-light px-4 py-3 rounded-xl text-body-sm text-text-tertiary">
                                📁 Repository: tid-2355301125-praksul-apps
                            </span>
                            <span className="flex items-center gap-2 bg-surface-light px-4 py-3 rounded-xl text-body-sm text-text-tertiary">
                                🗄️ Database: Supabase PostgreSQL
                            </span>
                            <span className="flex items-center gap-2 bg-surface-light px-4 py-3 rounded-xl text-body-sm text-text-tertiary">
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
