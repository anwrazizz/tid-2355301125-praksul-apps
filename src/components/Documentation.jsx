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
        switch (activeSection) {
            case 'overview':
                return (
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-white">🎓 Praktikum Susulan Frontend</h3>
                        <p className="text-gray-400">Pertemuan 12: Backend as a Service (BaaS)</p>
                        <div className="px-8 py-4 bg-gradient-to-r from-teal-400 to-purple-500 rounded-xl text-black font-semibold inline-block">
                            Demonstrasi BaaS menggunakan Supabase
                        </div>
                        <div className="mt-6 p-6 bg-[#2a2a2a] border border-gray-700 rounded-2xl">
                            <h4 className="text-2xl text-white mb-2">📝 Deskripsi Proyek</h4>
                            <p className="text-gray-300">
                                Praktikum ini mendemonstrasikan penggunaan Backend as a Service (BaaS) menggunakan Supabase untuk membuat aplikasi Notes dengan fitur CRUD lengkap. Aplikasi ini dibangun dengan React 19 dan Tailwind CSS.
                            </p>
                        </div>
                    </div>
                )
            case 'student':
                return (
                    <div className="space-y-6">
                        <div className="p-6 bg-[#2a2a2a] border border-gray-700 rounded-2xl">
                            <h3 className="text-white text-2xl mb-4">👤 Informasi Mahasiswa</h3>
                            <ul className="text-gray-300 space-y-3">
                                <li><strong>Nama:</strong> Muhammad Anwar Aziz</li>
                                <li><strong>NIM:</strong> 2355301125</li>
                                <li><strong>Kelas:</strong> 2 TI D</li>
                                <li><strong>Mata Kuliah:</strong> BPF 2</li>
                            </ul>
                        </div>
                    </div>
                )
            case 'concepts':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl text-white mb-4">🧠 Konsep yang Diterapkan</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {["Backend as a Service (BaaS)", "REST API Integration", "CRUD Operations", "Komponen Reusable", "State Management", "Error Handling", "Loading States", "Form Validation"].map((concept, index) => (
                                <li key={index} className="p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl hover:scale-105 transition-all">
                                    <span className="text-teal-400 font-bold mr-2">{index + 1}.</span>
                                    <span className="text-gray-300">{concept}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            case 'components':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl text-white mb-4">⚙️ Komponen yang Dibuat</h3>
                        <ul className="space-y-4">
                            {[{ name: 'GenericTable', desc: 'Tabel reusable untuk data', icon: BsFileText }, { name: 'AlertBox', desc: 'Notifikasi dan peringatan', icon: BsCloud }, { name: 'LoadingSpinner', desc: 'Indikator loading', icon: BsGear }, { name: 'EmptyState', desc: 'Tampilan saat data kosong', icon: BsBook }, { name: 'Notes', desc: 'Komponen utama', icon: BsLaptop }, { name: 'Documentation', desc: 'Halaman dokumentasi', icon: BsCode }, { name: 'notesAPI', desc: 'Service API integration', icon: BsDatabase }].map((comp, i) => (
                                <li key={i} className="flex justify-between items-center p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl hover:scale-105 transition-all">
                                    <div>
                                        <p className="text-white font-semibold">{comp.name}</p>
                                        <p className="text-sm text-gray-400">{comp.desc}</p>
                                    </div>
                                    <comp.icon className="text-2xl text-teal-400" />
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            case 'implementation':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl text-white mb-4">💻 Implementasi Aplikasi</h3>
                        <ul className="space-y-4">
                            {["Supabase REST API untuk operasi CRUD", "GenericTable untuk tampilan dinamis", "useState dan useEffect untuk state management", "UI responsif dengan Tailwind", "Validasi form dan loading/error state"].map((item, index) => (
                                <li key={index} className="p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl text-gray-300">{item}</li>
                            ))}
                        </ul>
                    </div>
                )
            case 'database':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl text-white mb-4">🗄️ Struktur Database</h3>
                        <div className="space-y-4">
                            {[{ field: 'id', type: 'BIGSERIAL PRIMARY KEY', desc: 'Unique identifier' }, { field: 'title', type: 'TEXT NOT NULL', desc: 'Judul catatan' }, { field: 'content', type: 'TEXT NOT NULL', desc: 'Isi catatan' }, { field: 'status', type: 'VARCHAR(20)', desc: 'To Do, In Progress, Done' }, { field: 'created_at', type: 'TIMESTAMPTZ', desc: 'Waktu pembuatan' }].map((f, i) => (
                                <div key={i} className="p-4 bg-[#2a2a2a] border-l-4 border-teal-400 border border-gray-700 rounded-xl">
                                    <p className="text-white font-bold">{f.field} <span className="text-sm text-gray-400">({f.type})</span></p>
                                    <p className="text-sm text-gray-400">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case 'api':
                return (
                    <div className="space-y-6">
                        <h3 className="text-2xl text-white mb-4">🔌 API Endpoints</h3>
                        {[{ method: 'GET', endpoint: '/rest/v1/notes', desc: 'Ambil semua catatan', color: 'bg-blue-500' }, { method: 'POST', endpoint: '/rest/v1/notes', desc: 'Tambah catatan', color: 'bg-green-500' }, { method: 'DELETE', endpoint: '/rest/v1/notes?id=eq.X', desc: 'Hapus catatan', color: 'bg-red-500' }].map((api, index) => (
                            <div key={index} className="p-4 bg-[#2a2a2a] border border-gray-700 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <span className={`${api.color} text-white font-bold px-4 py-2 rounded-lg`}>{api.method}</span>
                                    <div>
                                        <code className="text-white">{api.endpoint}</code>
                                        <p className="text-sm text-gray-400">{api.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4 text-gray-300">
                            Semua request menggunakan API Key dan Bearer Token dari Supabase untuk autentikasi.
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto p-6 text-white">
            <div className="lg:w-1/4">
                <div className="bg-[#2a2a2a] backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-700 sticky top-6">
                    <div className="text-center mb-6">
                        <BsBook className="text-4xl text-teal-400 mb-2" />
                        <h2 className="text-xl font-bold">Dokumentasi</h2>
                        <p className="text-sm text-gray-400">Praktikum Susulan</p>
                    </div>
                    <nav className="space-y-2">
                        {sections.map((section) => {
                            const Icon = section.icon
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                                        activeSection === section.id
                                            ? 'bg-gradient-to-r from-teal-400 to-purple-500 text-black shadow-lg'
                                            : 'text-gray-300 hover:bg-[#333] hover:text-white'
                                    }`}
                                >
                                    <Icon className="text-xl" />
                                    <span className="text-sm font-medium">{section.label}</span>
                                </button>
                            )
                        })}
                    </nav>
                </div>
            </div>
            <div className="lg:w-3/4">
                <div className="bg-[#1f1f1f] rounded-3xl p-10 shadow-lg border border-gray-700 min-h-96 animate-fade-in">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}