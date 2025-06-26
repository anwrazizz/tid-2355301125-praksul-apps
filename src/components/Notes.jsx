import React, { useState, useEffect } from 'react'
import { BsFileText, BsPlus } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { notesAPI } from '../services/notesAPI'
import AlertBox from './AlertBox'
import LoadingSpinner from './LoadingSpinner'
import EmptyState from './EmptyState'

export default function Notes() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [notes, setNotes] = useState([])
    
    const [dataForm, setDataForm] = useState({
        title: "", 
        content: "", 
        status: "To Do"
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setDataForm({
            ...dataForm,
            [name]: value,
        })
    }

    useEffect(() => {
        loadNotes()
    }, [])

    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async () => {
        if (!dataForm.title.trim() || !dataForm.content.trim()) {
            setError("Judul dan konten tidak boleh kosong")
            return
        }

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.createNote(dataForm)

            setSuccess("Catatan berhasil ditambahkan!")
            setDataForm({ title: "", content: "", status: "To Do" })
            setTimeout(() => setSuccess(""), 3000)
            loadNotes()
            
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("Yakin ingin menghapus catatan ini?")
        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")

            await notesAPI.deleteNote(id)
            setSuccess("Catatan berhasil dihapus!")
            setTimeout(() => setSuccess(""), 3000)
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Dashboard Header */}
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mb-3 flex items-center justify-center gap-3 drop-shadow-lg">
                    <BsFileText className="text-emerald-400 text-4xl" />
                    Notes Dashboard
                </h2>
                <p className="text-gray-600 text-lg">Kelola catatan Anda dengan mudah menggunakan BaaS Supabase</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-emerald-600">{notes.length}</div>
                    <div className="text-gray-600 text-sm">Total Catatan</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-yellow-600">
                        {notes.filter(note => note.status === 'To Do').length}
                    </div>
                    <div className="text-gray-600 text-sm">To Do</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-600">
                        {notes.filter(note => note.status === 'On Progress').length}
                    </div>
                    <div className="text-gray-600 text-sm">On Progress</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-emerald-600">
                        {notes.filter(note => note.status === 'Done').length}
                    </div>
                    <div className="text-gray-600 text-sm">Completed</div>
                </div>
            </div>

            {/* Alert Messages */}
            {error && (
                <AlertBox 
                    type="error" 
                    onClose={() => setError("")}
                >
                    {error}
                </AlertBox>
            )}
            {success && (
                <AlertBox 
                    type="success" 
                    onClose={() => setSuccess("")}
                >
                    {success}
                </AlertBox>
            )}

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Form Section - Smaller width */}
                <div className="lg:col-span-1">
                    <div className="glass rounded-3xl p-6 shadow-2xl sticky top-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <BsPlus className="text-emerald-500 text-2xl" />
                            Buat Catatan Baru
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    📝 Judul
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={dataForm.title}
                                    placeholder="Masukkan judul catatan..."
                                    onChange={handleChange}
                                    disabled={loading}
                                    className="w-full p-3 bg-white/90 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    📄 Konten
                                </label>
                                <textarea
                                    name="content"
                                    value={dataForm.content}
                                    placeholder="Tulis isi catatan di sini..."
                                    onChange={handleChange}
                                    disabled={loading}
                                    rows="4"
                                    className="w-full p-3 bg-white/90 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    🏷️ Status
                                </label>
                                <select
                                    name="status"
                                    value={dataForm.status}
                                    onChange={handleChange}
                                    disabled={loading}
                                    className="w-full p-3 bg-white/90 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                                >
                                    <option value="To Do">📋 To Do</option>
                                    <option value="On Progress">⏳ On Progress</option>
                                    <option value="Done">✅ Done</option>
                                </select>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                            >
                                {loading ? "🔄 Menyimpan..." : "➕ Tambah Catatan"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notes Display Section - Larger width */}
                <div className="lg:col-span-2">
                    <div className="glass rounded-3xl shadow-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200/50 bg-gradient-to-r from-emerald-50/50 to-blue-50/50">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                                <BsFileText className="text-emerald-500 text-xl" />
                                Daftar Catatan ({notes.length})
                            </h3>
                        </div>

                        <div className="p-6">
                            {loading && <LoadingSpinner text="Memuat catatan..." />}

                            {!loading && notes.length === 0 && !error && (
                                <EmptyState text="Belum ada catatan. Buat catatan pertama Anda!" />
                            )}

                            {!loading && notes.length === 0 && error && (
                                <EmptyState text="Terjadi kesalahan saat memuat data." />
                            )}
                            
                            {!loading && notes.length > 0 && (
                                <div className="space-y-4">
                                    {notes.map((note, index) => (
                                        <div key={note.id} className="bg-gradient-to-r from-white/80 to-gray-50/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-sm font-semibold text-gray-500">#{index + 1}</span>
                                                        <h4 className="text-xl font-bold text-gray-800">{note.title}</h4>
                                                    </div>
                                                    <p className="text-gray-600 leading-relaxed mb-3">{note.content}</p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-gray-500">
                                                            📅 {new Date(note.created_at).toLocaleDateString('id-ID', {
                                                                weekday: 'long',
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                        </span>
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                                                            note.status === 'Done'
                                                                ? 'bg-emerald-100 text-emerald-700'
                                                                : note.status === 'On Progress'
                                                                ? 'bg-yellow-100 text-yellow-700'
                                                                : 'bg-gray-100 text-gray-700'
                                                        }`}>
                                                            {note.status === 'Done' && '✅'}
                                                            {note.status === 'On Progress' && '⏳'}
                                                            {note.status === 'To Do' && '📋'}
                                                            <span className="ml-1">{note.status}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleDelete(note.id)}
                                                    className="ml-4 p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-200 hover:scale-110 shadow"
                                                    title="Hapus Catatan"
                                                >
                                                    <AiFillDelete size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
