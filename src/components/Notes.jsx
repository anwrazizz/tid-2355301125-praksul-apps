import React, { useState, useEffect } from 'react'
import { BsFileText, BsPlus } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { notesAPI } from '../services/notesAPI'
import GenericTable from './GenericTable'
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
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <h2 className="text-4xl font-extrabold text-emerald-700 mb-2 flex items-center gap-3">
                    <BsFileText className="text-emerald-500 text-3xl" />
                    Notes App - BaaS Implementation
                </h2>
                <p className="text-gray-600 text-lg">Demonstrasi Backend as a Service menggunakan React dan Supabase</p>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-10 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <BsPlus className="text-emerald-500 text-xl" />
                    Tambah Catatan Baru
                </h3>

                <div className="space-y-5">
                    <input
                        type="text"
                        name="title"
                        value={dataForm.title}
                        placeholder="Judul catatan"
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 text-lg"
                    />

                    <textarea
                        name="content"
                        value={dataForm.content}
                        placeholder="Isi catatan"
                        onChange={handleChange}
                        disabled={loading}
                        rows="3"
                        className="w-full p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 text-lg"
                    />

                    <select
                        name="status"
                        value={dataForm.status}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full p-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 disabled:opacity-50 text-lg"
                    >
                        <option value="To Do">To Do</option>
                        <option value="On Progress">On Progress</option>
                        <option value="Done">Done</option>
                    </select>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg text-lg"
                    >
                        {loading ? "Mohon Tunggu..." : "Tambah Catatan"}
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                        <BsFileText className="text-emerald-500 text-xl" />
                        Daftar Catatan ({notes.length})
                    </h3>
                </div>

                {loading && <LoadingSpinner text="Memuat catatan..." />}

                {!loading && notes.length === 0 && !error && (
                    <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
                )}

                {!loading && notes.length === 0 && error && (
                    <EmptyState text="Terjadi kesalahan. Coba lagi nanti." />
                )}
                
                {!loading && notes.length > 0 && (
                    <div className="p-8">
                        <GenericTable
                            columns={["#", "Judul", "Isi Catatan", "Status", "Aksi"]}
                            data={notes}
                            renderRow={(note, index) => (
                                <>
                                    <td className="px-6 py-4 font-medium text-gray-700 text-lg">
                                        {index + 1}.
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="font-semibold text-emerald-600 text-lg">
                                            {note.title}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {new Date(note.created_at).toLocaleDateString('id-ID')}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 max-w-xs text-gray-700 text-base">
                                        {note.content}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                            note.status === 'Done'
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : note.status === 'On Progress'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            {note.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                                            title="Hapus Catatan"
                                        >
                                            <AiFillDelete size={20} />
                                        </button>
                                    </td>
                                </>
                            )}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
