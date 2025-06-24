import React from 'react'
import { BsBook, BsCode, BsGear, BsFileText } from 'react-icons/bs'

export default function Documentation() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 border border-gray-100">
                <h2 className="text-4xl font-extrabold text-emerald-700 mb-8 flex items-center gap-3">
                    <BsBook className="text-emerald-500 text-3xl" />
                    Dokumentasi Praktikum Susulan
                </h2>
                <div className="space-y-8">
                    {/* Header Info */}
                    <div className="border-l-4 border-emerald-400 pl-6 bg-emerald-50/50 rounded-xl py-4">
                        <h3 className="text-2xl font-bold text-emerald-800 mb-2">Pertemuan 12: Backend as a Service (BaaS)</h3>
                        <div className="text-gray-700 space-y-1 text-lg">
                            <p><span className="font-semibold">Nama:</span> Mohamad Haziq Dafren</p>
                            <p><span className="font-semibold">Nim:</span> 2355301119</p>
                            <p><span className="font-semibold">Kelas:</span> 2 TI D</p>
                            <p className="mt-2 text-base text-gray-600">
                                Praktikum ini mendemonstrasikan penggunaan BaaS (Backend as a Service) menggunakan Supabase untuk membuat aplikasi Notes dengan fitur CRUD lengkap.
                            </p>
                        </div>
                    </div>

                    {/* Grid Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Konsep */}
                        <div className="bg-blue-50/80 p-6 rounded-2xl shadow border border-blue-100">
                            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2 text-lg">
                                <BsCode />
                                Konsep yang Diterapkan
                            </h4>
                            <ul className="text-blue-700 space-y-2 text-base list-disc ml-5">
                                <li>Backend as a Service (BaaS)</li>
                                <li>REST API Integration</li>
                                <li>CRUD Operations</li>
                                <li>Komponen Reusable</li>
                                <li>State Management</li>
                                <li>Error Handling</li>
                                <li>Loading States</li>
                                <li>Form Validation</li>
                            </ul>
                        </div>
                        {/* Komponen */}
                        <div className="bg-green-50/80 p-6 rounded-2xl shadow border border-green-100">
                            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2 text-lg">
                                <BsGear />
                                Komponen yang Dibuat
                            </h4>
                            <ul className="text-green-700 space-y-2 text-base list-disc ml-5">
                                <li>GenericTable - Tabel reusable</li>
                                <li>AlertBox - Notifikasi</li>
                                <li>LoadingSpinner - Loading indicator</li>
                                <li>EmptyState - State kosong</li>
                                <li>Notes - Komponen utama</li>
                                <li>Documentation - Halaman ini</li>
                                <li>notesAPI - Service layer</li>
                            </ul>
                        </div>
                    </div>

                    {/* Implementasi */}
                    <div className="bg-yellow-50/80 p-6 rounded-2xl shadow border border-yellow-100">
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2 text-lg">
                            <BsFileText />
                            Implementasi di Aplikasi
                        </h4>
                        <div className="text-yellow-700 space-y-3 text-base">
                            <div>
                                <span className="font-semibold">BaaS Integration:</span> Menggunakan Supabase REST API untuk operasi CRUD dengan authentication header.
                            </div>
                            <div>
                                <span className="font-semibold">Komponen Reusable:</span> GenericTable menerima props fleksibel untuk berbagai jenis data.
                            </div>
                            <div>
                                <span className="font-semibold">State Management:</span> useState dan useEffect untuk data fetching dan state handling.
                            </div>
                            <div>
                                <span className="font-semibold">User Experience:</span> Loading states, error messages, dan feedback visual yang jelas.
                            </div>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="bg-purple-50/80 p-6 rounded-2xl shadow border border-purple-100">
                        <h4 className="font-semibold text-purple-800 mb-3 text-lg">Struktur Database (Supabase)</h4>
                        <div className="text-purple-700 text-base">
                            <p className="mb-2 font-semibold">Tabel: notes</p>
                            <div className="bg-white p-3 rounded border text-sm space-y-1">
                                <div>id (BIGSERIAL PRIMARY KEY)</div>
                                <div>title (TEXT NOT NULL)</div>
                                <div>content (TEXT NOT NULL)</div>
                                <div>status (VARCHAR(20))</div>
                                <div>created_at (TIMESTAMPTZ)</div>
                            </div>
                        </div>
                    </div>

                    {/* API Endpoints */}
                    <div className="bg-gray-50/80 p-6 rounded-2xl shadow border border-gray-100">
                        <h4 className="font-semibold text-gray-800 mb-3 text-lg">API Endpoints</h4>
                        <div className="text-gray-700 text-base space-y-2">
                            <div><span className="font-semibold">GET</span> /rest/v1/notes - Ambil semua catatan</div>
                            <div><span className="font-semibold">POST</span> /rest/v1/notes - Tambah catatan baru</div>
                            <div><span className="font-semibold">DELETE</span> /rest/v1/notes?id=eq.X - Hapus catatan</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
