import React from "react";
import * as dateFns from "date-fns";

class Scheduler extends React.Component {
    state = {
        currentDay: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {
        const dateFormat = "MMMM d, yyyy";
        return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={this.prevDay}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>
                {dateFns.format(this.state.currentDay, dateFormat)}
              </span>
            </div>
            <div className="col col-end" onClick={this.nextDay}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
        );
    }

    renderHours() {
        const dateFormat = "h";
        const hours = [];
        let startHour = dateFns.startOfHour(this.state.currentDay);
        // TODO: fix this count, currently short an hour
        let hoursCount = dateFns.differenceInHours(dateFns.endOfDay(this.state.currentDay), startHour);
    
        for (let i = 0; i < hoursCount; i++) {
          hours.push(
            <div className="col col-center" key={i}>
              {dateFns.format(dateFns.addHours(startHour, i), dateFormat)}
            </div>
          );
        }
        return <div className="hours row">{hours}</div>;
    }

    renderCells() {}

    onDateClick = day => {}

    // TODO: fix these two functions to reset the hour if not on the current day
    nextDay = () => {
        this.setState({
            currentDay: dateFns.addDays(this.state.currentDay, 1)
        });
    };
    
    prevDay = () => {
        this.setState({
            currentDay: dateFns.subDays(this.state.currentDay, 1)
        });
    };
    
    render() {
        return (
          <div className="scheduler">
            {this.renderHeader()}
            {this.renderHours()}
            {this.renderCells()}
          </div>
        );
    }
}

export default Scheduler;
