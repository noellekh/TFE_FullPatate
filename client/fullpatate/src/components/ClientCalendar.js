import React, {Component, useState} from "react";
import DatePicker from 'react-datepicker';
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";
//import format from 'date-fns'

import { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)

/*
class ClientCalendar extends Component{
    constructor (props){
        super(props)
        this.state={
            dateChoice: new Date()
        };

        this.handleChange =this.handleChange.bind(this);
        this.onFormsubmit = this.onFormsubmit.bind(this);
    }

    handleChange(date){
        this.setState({
            dateChoice: date
        })
    }

    onFormsubmit(e){
        e.preventDefault();
        console.log(this.state.dateChoice)
    }

    render() {
        return (
          <form onSubmit={ this.onFormSubmit }>
            <div className="form-group">
              <DatePicker
                  selected={ this.state.dateChoice }
                  onChange={ this.handleChange }
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={20}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
              />
              <button className="btn btn-primary">Show Date</button>
            </div>
          </form>
        );
      }
      

}

export default ClientCalendar;

*/
const ClientCalendar = () =>{
    const [chooseDate, setChooseDate] = useState(null);

    const handleChoiceDate=(date)=>{
        setChooseDate(date)
        console.log(chooseDate)
        return date;
    };



    return(
        <div className="ag-client-datepicker">
            <div>
                <label>Choisir un rendez-vous</label>
                <DatePicker
                selected={chooseDate}
                onChange={handleChoiceDate}
                dateFormat="yyyy/dd/MM EE HH:mm "
                showTimeSelect
                timeIntervals={60}
                locale='fr'
                />
            </div>

            <div className="ag-client-choix">
                <p>Vous avez choisi {chooseDate ? chooseDate.toString(): null}</p>
                <p>{moment(chooseDate).format("dddd  DD/MM/yyyy à HH:mm")}</p>

            </div>


        </div>
    )
    
};

export default ClientCalendar;

/*

class ClientCalendar extends Component {
    state ={
        startDate: new Date()
    };

    handleChange = (date, event) =>{
        console.log('onChange', date, event)
        this.setState({
            startDate: date
        });
    };

    selectedDate = (date)=>{
        const booked_date =date.;
        console.log(booked_date);
        alert(booked_date)
        return booked_date;
        
    }

    // enlever les week end

    filterDays = (date) => {
        // Disable Weekends
        if (date.getDay() === 0 || date.getDay() === 6) {
            return false;
        } else {
            return true;
        }
    }



    render () {
        // exclure des dates
        // const excludeDateArray = [new Date('2020-06-21')]
        return(
            <div className="ag-client-datepicker">
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    dateFormat="yyyy/dd/MM EE hh:mm a"
                    locale="fr"
                    //excludeDates={excludeDateArray}
                    filterDate={this.filterDays}

                />

                <button onClick={this.selectedDate}>Choisir Date</button>
            </div>
        )
    };
}

export default ClientCalendar;

*/