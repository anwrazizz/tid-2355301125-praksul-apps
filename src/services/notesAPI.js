import axios from 'axios'

const API_URL = "https://yxjnkqawcaaoifsnearp.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4am5rcWF3Y2Fhb2lmc25lYXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NTExNjIsImV4cCI6MjA2NjUyNzE2Mn0.MW0dJO32Jw8ylsBnlTg_SXnYViLkDXYnc4xl5rwKjeg"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        try {
            const response = await axios.get(API_URL, { headers })
            return response.data
        } catch (error) {
            console.error('Error fetching notes:', error)
            throw error
        }
    },

    async createNote(data) {
        try {
            const response = await axios.post(API_URL, data, { headers })
            return response.data
        } catch (error) {
            console.error('Error creating note:', error)
            throw error
        }
    },

    async deleteNote(id) {
        try {
            await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        } catch (error) {
            console.error('Error deleting note:', error)
            throw error
        }
    }
}
