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
            <div className="mb-10 text-center">
                <h2 className="text-display text-transparent bg-clip-text bg-gradient-primary mb-4 flex items-center justify-center gap-4 drop-shadow-lg">
                    <BsFileText className="text-primary text-5xl animate-pulse-glow" />
                    Notes Dashboard
                </h2>
                <p className="text-body-lg text-text-secondary">Kelola catatan Anda dengan mudah menggunakan BaaS Supabase</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-surface backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border border-surface-light shadow-dark hover:shadow-glow group">
                    <div className="text-h1 text-primary group-hover:animate-pulse-glow">{notes.length}</div>
                    <div className="text-caption text-text-secondary mt-2">Total Catatan</div>
                </div>
                <div className="bg-surface backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border border-surface-light shadow-dark hover:shadow-glow group">
                    <div className="text-h1 text-yellow-400 group-hover:animate-pulse-glow">
                        {notes.filter(note => note.status === 'To Do').length}
                    </div>
                    <div className="text-caption text-text-secondary mt-2">To Do</div>
                </div>
                <div className="bg-surface backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border border-surface-light shadow-dark hover:shadow-glow group">
                    <div className="text-h1 text-blue-400 group-hover:animate-pulse-glow">
                        {notes.filter(note => note.status === 'On Progress').length}
                    </div>
                    <div className="text-caption text-text-secondary mt-2">On Progress</div>
                </div>
                <div className="bg-surface backdrop-blur-sm rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 border border-surface-light shadow-dark hover:shadow-glow group">
                    <div className="text-h1 text-secondary group-hover:animate-pulse-glow">
                        {notes.filter(note => note.status === 'Done').length}
                    </div>
                    <div className="text-caption text-text-secondary mt-2">Completed</div>
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
                    <div className="bg-surface backdrop-blur-sm rounded-3xl p-8 shadow-dark-lg border border-surface-light sticky top-6">
                        <h3 className="text-h2 text-text-primary mb-8 flex items-center gap-3">
                            <BsPlus className="text-primary text-3xl animate-pulse-glow" />
                            Buat Catatan Baru
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-body-sm text-text-secondary mb-3">
                                    📝 Judul
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={dataForm.title}
                                    placeholder="Masukkan judul catatan..."
                                    onChange={handleChange}
                                    disabled={loading}
                                    className="w-full p-4 bg-background border-2 border-surface-light rounded-2xl text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label className="block text-body-sm text-text-secondary mb-3">
                                    📄 Konten
                                </label>
                                <textarea
                                    name="content"
                                    value={dataForm.content}
                                    placeholder="Tulis isi catatan di sini..."
                                    onChange={handleChange}
                                    disabled={loading}
                                    rows="5"
                                    className="w-full p-4 bg-background border-2 border-surface-light rounded-2xl text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label className="block text-body-sm text-text-secondary mb-3">
                                    🏷️ Status
                                </label>
                                <select
                                    name="status"
                                    value={dataForm.status}
                                    onChange={handleChange}
                                    disabled={loading}
                                    className="w-full p-4 bg-background border-2 border-surface-light rounded-2xl text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 disabled:opacity-50"
                                >
                                    <option value="To Do">📋 To Do</option>
                                    <option value="On Progress">⏳ On Progress</option>
                                    <option value="Done">✅ Done</option>
                                </select>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full mt-8 px-8 py-4 bg-gradient-primary hover:shadow-glow text-black text-h4 rounded-2xl font-bold border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                            >
                                {loading ? "🔄 Menyimpan..." : "➕ Tambah Catatan"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Notes Display Section - Larger width */}
                <div className="lg:col-span-2">
                    <div className="bg-surface backdrop-blur-sm rounded-3xl shadow-dark-lg border border-surface-light overflow-hidden">
                        <div className="px-8 py-6 border-b border-surface-light bg-gradient-to-r from-surface-light/30 to-surface/30">
                            <h3 className="text-h2 flex items-center gap-3 text-text-primary">
                                <BsFileText className="text-primary text-2xl animate-pulse-glow" />
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
                                <div className="space-y-6">
                                    {notes.map((note, index) => (
                                        <div key={note.id} className="bg-gradient-to-r from-background to-surface-dark rounded-3xl p-8 shadow-dark-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border border-surface-light group">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <span className="text-caption text-primary bg-primary/20 px-3 py-1 rounded-xl">#{index + 1}</span>
                                                        <h4 className="text-h3 text-text-primary group-hover:text-primary transition-colors">{note.title}</h4>
                                                    </div>
                                                    <p className="text-body text-text-secondary leading-relaxed mb-4">{note.content}</p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-body-sm text-text-tertiary">
                                                            📅 {new Date(note.created_at).toLocaleDateString('id-ID', {
                                                                weekday: 'long',
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                        </span>
                                                        <span className={`inline-flex items-center px-4 py-2 rounded-2xl text-body-sm ${
                                                            note.status === 'Done'
                                                                ? 'bg-secondary/20 text-secondary border border-secondary/30'
                                                                : note.status === 'On Progress'
                                                                ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                                                                : 'bg-text-tertiary/20 text-text-tertiary border border-text-tertiary/30'
                                                        }`}>
                                                            {note.status === 'Done' && '✅'}
                                                            {note.status === 'On Progress' && '⏳'}
                                                            {note.status === 'To Do' && '📋'}
                                                            <span className="ml-2">{note.status}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleDelete(note.id)}
                                                    className="ml-6 p-3 rounded-2xl bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 transition-all duration-300 hover:scale-110 shadow-dark group-hover:shadow-glow"
                                                    title="Hapus Catatan"
                                                >
                                                    <AiFillDelete size={20} />
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
