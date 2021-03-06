import React from "react";
import dateFns from "date-fns";

class Scheduler extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };
    
    render() {
    return (
        <div>
        <div>Header</div>
        <div>Days</div>
        <div>Cells</div>
        </div>
    );
    }
}

export default Scheduler;