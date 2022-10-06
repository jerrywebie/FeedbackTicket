import ticketReducer  from './features/ticket';
import assigneeReducer from './features/assignee';
import issuetypeReducer from './features/issuetype';
import statusReducer from './features/status';


 const rootReducer = {
    tickets : ticketReducer,
    issuetypes: assigneeReducer,
    assignees: issuetypeReducer,
    ticketstatus : statusReducer,
 }
 export default rootReducer;