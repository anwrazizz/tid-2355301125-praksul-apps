import React, { useState } from 'react'
import { BsBook, BsCode, BsGear, BsFileText, BsDatabase, BsCloud, BsPerson, BsLaptop } from 'react-icons/bs'

export default function Documentation() {
    const [activeSection, setActiveSection] = useState('overview')

    const sections = [
        { id: 'overview', label: 'Overview', icon: BsBook },
        { id: 'student', label: 'Student Info', icon: BsPerson },
        { id: 'concepts', label: 'Konsep', icon: BsCode },
        { id: 'components', label: 'Komponen', icon: BsGear },
        { id: 'implementation', label: 'Implementasi', icon: BsLaptop },
        { id: 'database', label: 'Database', icon: BsDatabase },
        { id: 'api', label: 'API Endpoints', icon: BsCloud }
    ]

    const renderContent = () => {
        switch(activeSection) {
            case 'overview':
                return (
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="text-display text-text-primary mb-6">
                                🎓 Praktikum Susulan Frontend
                            </h3>
                            <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                                Pertemuan 12: Backend as a Service (BaaS)
                            </p>
                            <div className="inline-block px-8 py-4 bg-gradient-primary rounded-3xl shadow-glow">
                                <span className="text-black text-h4">
                                    Demonstrasi BaaS menggunakan Supabase
                                </span>
                            </div>
                        </div>
                        <div className="bg-surface backdrop-blur-sm rounded-3xl p-10 shadow-dark-lg border border-surface-light">
                            <h4 className="text-h2 text-text-primary mb-6 flex items-center gap-3">
                                📝 Deskripsi Proyek
                            </h4>
                            <p className="text-body text-text-secondary leading-relaxed">
                                Praktikum ini mendemonstrasikan penggunaan Backend as a Service (BaaS) 
                                menggunakan Supabase untuk membuat aplikasi Notes dengan fitur CRUD lengkap. 
                                Aplikasi ini dibangun dengan React 19 dan menggunakan Tailwind CSS untuk styling modern.
                            </p>
                        </div>
                    </div>
                )
            case 'student':
                return (
                    <div className="space-y-8">
                        <div className="bg-surface backdrop-blur-sm rounded-3xl p-10 shadow-dark-lg border border-surface-light">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-glow">
                                    <BsPerson className="text-blacktext-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-h1 text-text-primary">Informasi Mahasiswa</h3>
                                    <p className="text-body text-text-secondary">Data pribadi pengerjaan praktikum</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-background border border-surface-light p-6 rounded-3xl">
                                        <label className="text-caption text-text-tertiary uppercase tracking-wide">Nama Lengkap</label>
                                        <p className="text-h4 text-text-primary mt-2">Muhammad Anwar Aziz</p>
                                    </div>
                                    <div className="bg-background border border-surface-light p-6 rounded-3xl">
                                        <label className="text-sm font-black text-text-tertiary uppercase tracking-wide">NIM</label>
                                        <p className="text-xl font-black text-text-primary mt-2">2355301125</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-background border border-surface-light p-6 rounded-3xl">
                                        <label className="text-sm font-black text-text-tertiary uppercase tracking-wide">Kelas</label>
                                        <p className="text-xl font-black text-text-primary mt-2">2 TI D</p>
                                    </div>
                                    <div className="bg-background border border-surface-light p-6 rounded-3xl">
                                        <label className="text-sm font-black text-text-tertiary uppercase tracking-wide">Mata Kuliah</label>
                                        <p className="text-xl font-black text-text-primary mt-2">BPF 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 'concepts':
                return (
                    <div className="space-y-8">
                        <h3 className="text-h1 text-text-primary mb-8">🧠 Konsep yang Diterapkan</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                'Backend as a Service (BaaS)',
                                'REST API Integration', 
                                'CRUD Operations',
                                'Komponen Reusable',
                                'State Management',
                                'Error Handling',
                                'Loading States',
                                'Form Validation'
                            ].map((concept, index) => (
                                <div key={index} className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-black font-black text-lg shadow-glow group-hover:animate-pulse-glow">
                                            {index + 1}
                                        </div>
                                        <span className="text-h4 text-text-primary group-hover:text-primary transition-colors">{concept}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'components':
                return (
                    <div className="space-y-8">
                        <h3 className="text-h1 text-text-primary mb-8">⚙️ Komponen yang Dibuat</h3>
                        <div className="space-y-6">
                            {[
                                { name: 'GenericTable', desc: 'Tabel reusable untuk menampilkan data', icon: BsFileText },
                                { name: 'AlertBox', desc: 'Komponen notifikasi dan peringatan', icon: BsCloud },
                                { name: 'LoadingSpinner', desc: 'Indikator loading dengan animasi', icon: BsGear },
                                { name: 'EmptyState', desc: 'State ketika tidak ada data', icon: BsBook },
                                { name: 'Notes', desc: 'Komponen utama aplikasi notes', icon: BsLaptop },
                                { name: 'Documentation', desc: 'Halaman dokumentasi ini', icon: BsCode },
                                { name: 'notesAPI', desc: 'Service layer untuk API integration', icon: BsDatabase }
                            ].map((component, index) => (
                                <div key={index} className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                                    <div className="flex justify-between items-center">
                                        <div className="flex-1">
                                            <h4 className="text-h3 text-text-primary group-hover:text-primary transition-colors mb-2">{component.name}</h4>
                                            <p className="text-body text-text-secondary">{component.desc}</p>
                                        </div>
                                        <component.icon className="text-4xl text-primary group-hover:animate-pulse-glow ml-6" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'implementation':
                return (
                    <div className="space-y-8">
                        <h3 className="text-h1 text-text-primary mb-8">💻 Implementasi Aplikasi</h3>
                        <div className="space-y-8">
                            <div className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light hover:shadow-glow transition-all duration-300 group">
                                <h4 className="text-h3 text-text-primary mb-4 flex items-center gap-3 group-hover:text-primary transition-colors">
                                    <BsCloud className="text-2xl text-primary group-hover:animate-pulse-glow" />
                                    BaaS Integration
                                </h4>
                                <p className="text-body text-text-secondary leading-relaxed">
                                    Menggunakan Supabase REST API untuk operasi CRUD dengan authentication header yang aman dan efisien.
                                </p>
                            </div>
                            <div className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light hover:shadow-glow transition-all duration-300 group">
                                <h4 className="font-black text-text-primary text-xl mb-4 flex items-center gap-3 group-hover:text-secondary transition-colors">
                                    <BsGear className="text-2xl text-secondary group-hover:animate-pulse-glow" />
                                    Komponen Reusable
                                </h4>
                                <p className="text-body text-text-secondary leading-relaxed">
                                    GenericTable menerima props fleksibel untuk berbagai jenis data, memungkinkan penggunaan ulang di seluruh aplikasi.
                                </p>
                            </div>
                            <div className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light hover:shadow-glow transition-all duration-300 group">
                                <h4 className="font-black text-text-primary text-xl mb-4 flex items-center gap-3 group-hover:text-blue-400 transition-colors">
                                    <BsCode className="text-2xl text-blue-400 group-hover:animate-pulse-glow" />
                                    State Management
                                </h4>
                                <p className="text-body text-text-secondary leading-relaxed">
                                    Menggunakan useState dan useEffect untuk data fetching dan state handling yang reaktif.
                                </p>
                            </div>
                            <div className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light hover:shadow-glow transition-all duration-300 group">
                                <h4 className="font-black text-text-primary text-xl mb-4 flex items-center gap-3 group-hover:text-purple-400 transition-colors">
                                    <BsLaptop className="text-2xl text-purple-400 group-hover:animate-pulse-glow" />
                                    User Experience
                                </h4>
                                <p className="text-body text-text-secondary leading-relaxed">
                                    Loading states, error messages, dan feedback visual yang jelas untuk pengalaman pengguna yang optimal.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            case 'database':
                return (
                    <div className="space-y-8">
                        <h3 className="text-h1 text-text-primary mb-8">🗄️ Struktur Database</h3>
                        <div className="bg-surface backdrop-blur-sm p-10 rounded-3xl shadow-dark-lg border border-surface-light">
                            <div className="flex items-center gap-6 mb-8">
                                <BsDatabase className="text-5xl text-primary animate-pulse-glow" />
                                <div>
                                    <h4 className="text-h2 text-text-primary">Supabase PostgreSQL</h4>
                                    <p className="text-body text-text-secondary">Tabel: notes</p>
                                </div>
                            </div>
                            <div className="grid gap-6">
                                {[
                                    { field: 'id', type: 'BIGSERIAL PRIMARY KEY', desc: 'Unique identifier' },
                                    { field: 'title', type: 'TEXT NOT NULL', desc: 'Judul catatan' },
                                    { field: 'content', type: 'TEXT NOT NULL', desc: 'Isi catatan' },
                                    { field: 'status', type: 'VARCHAR(20)', desc: 'Status: To Do, On Progress, Done' },
                                    { field: 'created_at', type: 'TIMESTAMPTZ', desc: 'Waktu pembuatan otomatis' }
                                ].map((field, index) => (
                                    <div key={index} className="bg-background border border-surface-light p-6 rounded-3xl border-l-4 border-primary">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="text-h4 text-text-primary">{field.field}</span>
                                                <span className="text-body-sm text-text-tertiary ml-3">({field.type})</span>
                                            </div>
                                            <span className="text-text-secondary">{field.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            case 'api':
                return (
                    <div className="space-y-8">
                        <h3 className="text-h1 text-text-primary mb-8">🔌 API Endpoints</h3>
                        <div className="space-y-6">
                            {[
                                { method: 'GET', endpoint: '/rest/v1/notes', desc: 'Ambil semua catatan', color: 'secondary' },
                                { method: 'POST', endpoint: '/rest/v1/notes', desc: 'Tambah catatan baru', color: 'primary' },
                                { method: 'DELETE', endpoint: '/rest/v1/notes?id=eq.X', desc: 'Hapus catatan berdasarkan ID', color: 'red-500' }
                            ].map((api, index) => (
                                <div key={index} className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light hover:shadow-glow transition-all duration-300 group">
                                    <div className="flex items-center gap-6">
                                        <span className={`px-4 py-2 rounded-2xl ${api.color === 'secondary' ? 'bg-secondary' : api.color === 'primary' ? 'bg-primary' : 'bg-red-500'} text-white font-black`}>
                                            {api.method}
                                        </span>
                                        <div className="flex-1">
                                            <code className="text-body text-text-primary font-mono bg-background px-4 py-2 rounded-xl">{api.endpoint}</code>
                                            <p className="text-body-sm text-text-secondary mt-3">{api.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-surface backdrop-blur-sm p-8 rounded-3xl shadow-dark-lg border border-surface-light">
                            <h4 className="text-h3 text-text-primary mb-4 flex items-center gap-3">
                                🔑 Authentication
                            </h4>
                            <p className="text-body text-text-secondary leading-relaxed">
                                Semua request menggunakan API Key dan Bearer Token untuk autentikasi dengan Supabase.
                            </p>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                🎓 Praktikum Susulan Frontend
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Pertemuan 12: Backend as a Service (BaaS)
                            </p>
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto p-6">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
                <div className="bg-surface backdrop-blur-sm rounded-3xl p-8 shadow-dark-lg border border-surface-light sticky top-6">
                    <div className="text-center mb-8">
                        <BsBook className="text-5xl text-primary mx-auto mb-4 animate-pulse-glow" />
                        <h2 className="text-h2 text-text-primary">Dokumentasi</h2>
                        <p className="text-body-sm text-text-secondary">Praktikum Susulan</p>
                    </div>
                    <nav className="space-y-3">
                        {sections.map((section) => {
                            const Icon = section.icon
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-3xl text-left transition-all duration-300 hover:scale-105 ${
                                        activeSection === section.id
                                            ? 'bg-gradient-primary text-black shadow-glow'
                                            : 'text-text-secondary hover:bg-surface-light hover:text-text-primary'
                                    }`}
                                >
                                    <Icon className="text-xl flex-shrink-0" />
                                    <span className="text-body">{section.label}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
                <div className="bg-surface backdrop-blur-sm rounded-3xl p-10 shadow-dark-lg border border-surface-light min-h-96 animate-fade-in">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}
