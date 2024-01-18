import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "English",
        visible: false,
        openAIKey: "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"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        },
        setVisible: (state, action) => {
            state.visible = action.payload;
        },
        setOpenAIKey: (state, action) => {
            state.openAIKey = action.payload
        }
    }
});

export default configSlice.reducer;
export const { changeLanguage, setVisible, setOpenAIKey } = configSlice.actions;