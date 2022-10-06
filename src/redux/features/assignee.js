import {createSlice} from "@reduxjs/toolkit";
import data from '../../api/data';

const initialState = {
    assignees : data.Developers
}

let assigneeSlice = createSlice({
    name : 'assignees',
    initialState : initialState,
});

export default assigneeSlice.reducer;