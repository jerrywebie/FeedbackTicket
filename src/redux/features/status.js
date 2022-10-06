import {createSlice} from "@reduxjs/toolkit";
import data from '../../api/data';

const initialState = {
    ticketstatus : data.Status
}

let statusSlice = createSlice({
    name : 'ticketstatus',
    initialState : initialState,
});

export default statusSlice.reducer;