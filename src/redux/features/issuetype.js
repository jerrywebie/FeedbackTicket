import {createSlice} from "@reduxjs/toolkit";
import data from '../../api/data';

const initialState = {
    issuetypes : data.IssueTypes
}

let issueTypeSlice = createSlice({
    name : 'issuetypes',
    initialState : initialState,
});

export default issueTypeSlice.reducer;