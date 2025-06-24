import axios from 'axios'

const API_URL = "https://idujyzxlslduwdhpqqsb.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkdWp5enhsc2xkdXdkaHBxcXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NjA1NTgsImV4cCI6MjA2NjMzNjU1OH0.O_7w8-PmyB5Pb_SGKLyrrcMD1Ino_CfDl2HC2ktJWbs"

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
