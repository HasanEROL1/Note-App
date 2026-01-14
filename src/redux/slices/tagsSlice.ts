import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";

const initialState: {tags: string[]} ={
    tags: [],
}

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTag(state,action: PayloadAction<string>) { 
            // eğer tag zaten varsa return et
            if(state.tags.includes(action.payload)) return;

            //yoksa tag i state e ekle

            state.tags.push(action.payload)
        },
    }

})

export const { addTag } = tagsSlice.actions;

export default tagsSlice.reducer