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
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto p-6 text-white">
            <div className="lg:w-1/3">
                <div className="bg-[#2a2a2a] backdrop-blur-md rounded-3xl p-8 shadow-lg border border-gray-700 sticky top-6">
                    <div className="text-center mb-6">
                        <BsPlus className="text-4xl text-teal-400 mb-2" />
                        <h2 className="text-xl font-bold">Tambah Catatan</h2>
                        <p className="text-sm text-gray-400">Formulir input catatan baru</p>
                    </div>
                    <div className="space-y-4">
                        <input name="title" placeholder="Judul catatan" value={dataForm.title} onChange={handleChange} disabled={loading} className="w-full p-4 bg-[#1f1f1f] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 disabled:opacity-50" />
                        <textarea name="content" rows="4" placeholder="Isi catatan" value={dataForm.content} onChange={handleChange} disabled={loading} className="w-full p-4 bg-[#1f1f1f] border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 resize-none disabled:opacity-50" />
                        <select name="status" value={dataForm.status} onChange={handleChange} disabled={loading} className="w-full p-4 bg-[#1f1f1f] border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-teal-400 focus:border-teal-400 disabled:opacity-50">
                            <option value="To Do">📋 To Do</option>
                            <option value="On Progress">⏳ On Progress</option>
                            <option value="Done">✅ Done</option>
                        </select>
                        <button onClick={handleSubmit} disabled={loading} className="w-full px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-500 text-black rounded-xl font-semibold shadow-md hover:shadow-lg transition-all">
                            {loading ? "Menyimpan..." : "Tambah Catatan"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:w-2/3">
                <div className="bg-[#1f1f1f] rounded-3xl p-8 shadow-lg border border-gray-700">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <BsFileText className="text-teal-400 text-2xl" />
                            Daftar Catatan ({notes.length})
                        </h3>
                    </div>

                    {error && <AlertBox type="error" onClose={() => setError("")}>{error}</AlertBox>}
                    {success && <AlertBox type="success" onClose={() => setSuccess("")}>{success}</AlertBox>}

                    {loading && <LoadingSpinner text="Memuat catatan..." />}
                    {!loading && notes.length === 0 && !error && <EmptyState text="Belum ada catatan." />}
                    {!loading && notes.length === 0 && error && <EmptyState text="Terjadi kesalahan saat memuat data." />}

                    {!loading && notes.length > 0 && (
                        <div className="space-y-6">
                            {notes.map((note,) => (
                                <div key={note.id} className="bg-[#2a2a2a] border border-gray-700 rounded-2xl p-6 group hover:scale-[1.01] transition-all">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-xl font-semibold text-white mb-2">{note.title}</h4>
                                            <p className="text-gray-300 mb-2">{note.content}</p>
                                            <div className="text-sm text-gray-500">
                                                📅 {new Date(note.created_at).toLocaleDateString('id-ID', {
                                                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className={`px-3 py-1 text-xs rounded-full border font-medium ${
                                                note.status === 'Done' ? 'bg-green-400/20 text-green-300 border-green-400/40' :
                                                note.status === 'On Progress' ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400/40' :
                                                'bg-gray-400/20 text-gray-300 border-gray-400/40'
                                            }`}>
                                                {note.status}
                                            </span>
                                            <button onClick={() => handleDelete(note.id)} className="text-red-400 hover:text-red-300">
                                                <AiFillDelete size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
