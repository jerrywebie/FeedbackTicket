import {createSlice} from "@reduxjs/toolkit";
import data from '../../api/data';

const initialState = {
    tickets : data.Tickets
}

let ticketSlice = createSlice({
    name : 'tickets',
    initialState : initialState,
    reducers : {
        addTicket : function (state , action){
        return {...state.tickets, tickets: [...state.tickets, {...action.payload, id: state.tickets.length + 1}] };
        },
        editTicket: function (state, action) {
          state.tickets = state.tickets.map(ticket => {
            if(ticket.id === action.payload){
                return {
                    id: action.payload,
                    ...action.payload.ticket,
                }
            }
            else return ticket;
        });
        },
        selectedTicket: function (state, action) {
          const ticket = state.ticketList.filter(obj => obj.id === action.payload)[0];
          return ticket;
        },
        removeSelectedTicket: function () {
          return {};
        }

    }
});
export const {addTicket, editTicket, selectedTicket, removeSelectedTicket} = ticketSlice.actions;
export default ticketSlice.reducer;