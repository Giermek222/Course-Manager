export default function courseReducer(state = [], action : any) {
    switch(action.type) {
        case "CREATE_COURSE":
            return [...state,{...action.course}];
        default:
            return state;
    }
}