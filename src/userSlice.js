import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userName: "",
    userLocation: "",
    phoneNumber: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName(state, action) {
            state.userName = action.payload;
        },
        updateLocation(state, action) {
            state.userLocation = action.payload;
        }, 
        updateNumber(state, action) {
            state.phoneNumber = action.payload;
        }
    }
})

export const {updateLocation, updateName, updateNumber} = userSlice.actions;
export default userSlice.reducer;