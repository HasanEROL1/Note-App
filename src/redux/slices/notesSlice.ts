import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note, NoteData } from "../../types";
import { v4 } from "uuid";

const initialState: { notes: Note[]} = {notes: [], }
const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<NoteData>) {
            const newNote: Note = {...action.payload, id:v4()}

            state.notes.push(newNote)
        },

        // Note 'u silmek için kullanılır
        deleteNote(state,action: PayloadAction<string>){
            // note'un indexini bul
            const i = state.notes.findIndex((note) => note.id === action.payload)

            // note'u sil
            if (i !== -1) {
            state.notes.splice(i, 1) }
        },

            // Note'u güncellemek için kullanılır
            updateNote(state,action:PayloadAction<Note>){
                 //note'un indexini bul
                const i = state.notes.findIndex((note) => note.id === action.payload.id)

                // note'u güncelle
                if (i !== -1) {
                    state.notes.splice(i, 1, action.payload)}
                },
            },
    })

        
            
      



export const { addNote, deleteNote, updateNote } = notesSlice.actions

export default notesSlice.reducer
            
     