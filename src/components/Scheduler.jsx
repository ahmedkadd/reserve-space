import React from "react";
import * as dateFns from "date-fns";

class Scheduler extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {
        const dateFormat = "MMMM yyyy";
        return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={this.prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>
                {dateFns.format(this.state.currentMonth, dateFormat)}
              </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
        );
    }

    renderDays() {}
    renderCells() {}

    onDateClick = day => {}
    nextMonth = () => {}
    prevMonth = () => {}
    
    render() {
        return (
          <div className="scheduler">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </div>
        );
    }
}

export default Scheduler;