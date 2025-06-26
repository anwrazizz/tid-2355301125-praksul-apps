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
                    <div className="space-y-6">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                🎓 Praktikum Susulan Frontend
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Pertemuan 12: Backend as a Service (BaaS)
                            </p>
                            <div className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl">
                                <span className="text-emerald-700 font-semibold">
                                    Demonstrasi BaaS menggunakan Supabase
                                </span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 shadow-lg">
                            <h4 className="text-xl font-bold text-gray-700 mb-4">📝 Deskripsi Proyek</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Praktikum ini mendemonstrasikan penggunaan Backend as a Service (BaaS) 
                                menggunakan Supabase untuk membuat aplikasi Notes dengan fitur CRUD lengkap. 
                                Aplikasi ini dibangun dengan React 19 dan menggunakan Tailwind CSS untuk styling modern.
                            </p>
                        </div>
                    </div>
                )
            case 'student':
                return (
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl flex items-center justify-center">
                                    <BsPerson className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Informasi Mahasiswa</h3>
                                    <p className="text-gray-600">Data pribadi pengerjaan praktikum</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-white/70 p-4 rounded-2xl">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Nama Lengkap</label>
                                        <p className="text-lg font-bold text-gray-800">Andika Syuhada</p>
                                    </div>
                                    <div className="bg-white/70 p-4 rounded-2xl">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">NIM</label>
                                        <p className="text-lg font-bold text-gray-800">2355301017</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white/70 p-4 rounded-2xl">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Kelas</label>
                                        <p className="text-lg font-bold text-gray-800">2 TI D</p>
                                    </div>
                                    <div className="bg-white/70 p-4 rounded-2xl">
                                        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Mata Kuliah</label>
                                        <p className="text-lg font-bold text-gray-800">BPF 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 'concepts':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">🧠 Konsep yang Diterapkan</h3>
                        <div className="grid md:grid-cols-2 gap-6">
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
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <span className="font-semibold text-gray-700">{concept}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'components':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Komponen yang Dibuat</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'GenericTable', desc: 'Tabel reusable untuk menampilkan data', color: 'emerald' },
                                { name: 'AlertBox', desc: 'Komponen notifikasi dan peringatan', color: 'red' },
                                { name: 'LoadingSpinner', desc: 'Indikator loading dengan animasi', color: 'blue' },
                                { name: 'EmptyState', desc: 'State ketika tidak ada data', color: 'gray' },
                                { name: 'Notes', desc: 'Komponen utama aplikasi notes', color: 'purple' },
                                { name: 'Documentation', desc: 'Halaman dokumentasi ini', color: 'yellow' },
                                { name: 'notesAPI', desc: 'Service layer untuk API integration', color: 'indigo' }
                            ].map((component, index) => (
                                <div key={index} className={`bg-gradient-to-r from-${component.color}-50 to-${component.color}-100 p-6 rounded-2xl shadow-lg border-l-4 border-${component.color}-400`}>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className={`text-lg font-bold text-${component.color}-700`}>{component.name}</h4>
                                            <p className={`text-${component.color}-600`}>{component.desc}</p>
                                        </div>
                                        <BsGear className={`text-2xl text-${component.color}-400`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'implementation':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">💻 Implementasi Aplikasi</h3>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg">
                                <h4 className="font-bold text-yellow-700 mb-3 flex items-center gap-2">
                                    <BsCloud className="text-xl" />
                                    BaaS Integration
                                </h4>
                                <p className="text-yellow-700">
                                    Menggunakan Supabase REST API untuk operasi CRUD dengan authentication header yang aman dan efisien.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg">
                                <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
                                    <BsGear className="text-xl" />
                                    Komponen Reusable
                                </h4>
                                <p className="text-emerald-700">
                                    GenericTable menerima props fleksibel untuk berbagai jenis data, memungkinkan penggunaan ulang di seluruh aplikasi.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg">
                                <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                                    <BsCode className="text-xl" />
                                    State Management
                                </h4>
                                <p className="text-blue-700">
                                    Menggunakan useState dan useEffect untuk data fetching dan state handling yang reaktif.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg">
                                <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                                    <BsLaptop className="text-xl" />
                                    User Experience
                                </h4>
                                <p className="text-purple-700">
                                    Loading states, error messages, dan feedback visual yang jelas untuk pengalaman pengguna yang optimal.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            case 'database':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">🗄️ Struktur Database</h3>
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <BsDatabase className="text-3xl text-purple-500" />
                                <div>
                                    <h4 className="text-xl font-bold text-purple-700">Supabase PostgreSQL</h4>
                                    <p className="text-purple-600">Tabel: notes</p>
                                </div>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    { field: 'id', type: 'BIGSERIAL PRIMARY KEY', desc: 'Unique identifier' },
                                    { field: 'title', type: 'TEXT NOT NULL', desc: 'Judul catatan' },
                                    { field: 'content', type: 'TEXT NOT NULL', desc: 'Isi catatan' },
                                    { field: 'status', type: 'VARCHAR(20)', desc: 'Status: To Do, On Progress, Done' },
                                    { field: 'created_at', type: 'TIMESTAMPTZ', desc: 'Waktu pembuatan otomatis' }
                                ].map((field, index) => (
                                    <div key={index} className="bg-white/70 p-4 rounded-xl border-l-4 border-purple-300">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-bold text-purple-700">{field.field}</span>
                                                <span className="text-purple-500 text-sm ml-2">({field.type})</span>
                                            </div>
                                            <span className="text-purple-600 text-sm">{field.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            case 'api':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">🔌 API Endpoints</h3>
                        <div className="space-y-4">
                            {[
                                { method: 'GET', endpoint: '/rest/v1/notes', desc: 'Ambil semua catatan', color: 'green' },
                                { method: 'POST', endpoint: '/rest/v1/notes', desc: 'Tambah catatan baru', color: 'blue' },
                                { method: 'DELETE', endpoint: '/rest/v1/notes?id=eq.X', desc: 'Hapus catatan berdasarkan ID', color: 'red' }
                            ].map((api, index) => (
                                <div key={index} className={`bg-gradient-to-r from-${api.color}-50 to-${api.color}-100 p-6 rounded-2xl shadow-lg border-l-4 border-${api.color}-400`}>
                                    <div className="flex items-center gap-4">
                                        <span className={`px-3 py-1 rounded-lg bg-${api.color}-500 text-white font-bold text-sm`}>
                                            {api.method}
                                        </span>
                                        <div className="flex-1">
                                            <code className={`text-${api.color}-700 font-mono font-semibold`}>{api.endpoint}</code>
                                            <p className={`text-${api.color}-600 text-sm mt-1`}>{api.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl shadow-lg">
                            <h4 className="font-bold text-gray-700 mb-3">🔑 Authentication</h4>
                            <p className="text-gray-600 text-sm">
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
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-6">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
                <div className="glass rounded-3xl p-6 shadow-2xl sticky top-6">
                    <div className="text-center mb-6">
                        <BsBook className="text-4xl text-emerald-500 mx-auto mb-3" />
                        <h2 className="text-xl font-bold text-gray-800">Dokumentasi</h2>
                        <p className="text-sm text-gray-600">Praktikum Susulan</p>
                    </div>
                    <nav className="space-y-2">
                        {sections.map((section) => {
                            const Icon = section.icon
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-300 hover:scale-105 ${
                                        activeSection === section.id
                                            ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-white/50'
                                    }`}
                                >
                                    <Icon className="text-lg flex-shrink-0" />
                                    <span className="font-medium">{section.label}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
                <div className="glass rounded-3xl p-8 shadow-2xl min-h-96 animate-fade-in">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}
