import React, { Component } from "react";
import DatePicker from "react-datepicker";
import 'react-dates/lib/css/_datepicker.css';
//import "react-datepicker/dist/react-datepicker.css";

class Fecha extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date,
            endDate: date

        });
    };

    render() {
        const [startDate, setStartDate] = useState(new Date("2019/09/29"));
        const [endDate, setEndDate] = useState(new Date("2019/10/15"));
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />

                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                />
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    endDate={endDate}
                />

                {/* <label className="col-sm-4 col-lg-2 col-form-label">
                        Fecha
                    </label>
                    <div
                        onClick={this.handleSubmit}
                        className="col-sm-8 col-lg-4  mb-4 mb-lg-0"
                    >
                        <input
                            type="date"
                            className="form-control"
                            ref={this.textInput}
                        />
                    </div> */}

                {/* <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        selectsEnd
                        endDate={endDate}
                        minDate={startDate}
                    /> */}
            </div>
        );
    }
}

export default Fecha;
