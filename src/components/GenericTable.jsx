import React from 'react'

export default function GenericTable({ columns, data }) {
    // Modern card-based layout instead of traditional table
    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-3 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-2xl">
                {columns.map((col, idx) => (
                    <div key={idx} className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        {col}
                    </div>
                ))}
            </div>
            
            {/* Data Cards */}
            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-white/90 to-gray-50/90 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border border-gray-100/50">
                        {/* Mobile layout - stacked */}
                        <div className="md:hidden space-y-3">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="text-lg font-bold text-gray-800">
                                        #{index + 1} - {item.title}
                                    </div>
                                    <div className="text-gray-600 mt-1">{item.content}</div>
                                    <div className="text-xs text-gray-500 mt-2">
                                        📅 {new Date(item.created_at).toLocaleDateString('id-ID')}
                                    </div>
                                </div>
                                <div className="ml-4 flex flex-col items-end gap-2">
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                                        item.status === 'Done'
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : item.status === 'On Progress'
                                            ? 'bg-yellow-100 text-yellow-700'
                                            : 'bg-gray-100 text-gray-700'
                                    }`}>
                                        {item.status === 'Done' && '✅'}
                                        {item.status === 'On Progress' && '⏳'}
                                        {item.status === 'To Do' && '📋'}
                                        <span className="ml-1">{item.status}</span>
                                    </span>
                                    <button
                                        className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                                        title="Hapus Catatan"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Desktop layout - grid */}
                        <div className="hidden md:grid grid-cols-5 gap-4 items-center">
                            <div className="text-gray-700 font-semibold">
                                #{index + 1}
                            </div>
                            <div>
                                <div className="font-bold text-gray-800">{item.title}</div>
                                <div className="text-xs text-gray-500">
                                    {new Date(item.created_at).toLocaleDateString('id-ID')}
                                </div>
                            </div>
                            <div className="text-gray-600 truncate">
                                {item.content}
                            </div>
                            <div>
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                    item.status === 'Done'
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : item.status === 'On Progress'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : 'bg-gray-100 text-gray-700'
                                }`}>
                                    {item.status === 'Done' && '✅'}
                                    {item.status === 'On Progress' && '⏳'}
                                    {item.status === 'To Do' && '📋'}
                                    <span className="ml-1">{item.status}</span>
                                </span>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-200 hover:scale-110"
                                    title="Hapus Catatan"
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
