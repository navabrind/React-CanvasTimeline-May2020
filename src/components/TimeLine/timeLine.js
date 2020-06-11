import React, { Component, Fragment } from 'react';
import moment from 'moment';
import TimeLineWithBox from './TimeLineWithBox'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../Navgiation/navBar'

import Draggable from 'react-draggable';
export default class TimeLine extends Component { 
    constructor(props) {
    super(props);
    this.state = { 
        showDates: false ,
         isDisplay:false,
         showDatesWithLineBar:false
        }
    this.box=this.box.bind(this)
}
handleonChange = (event) => {
    this.setState({

        [event.target.name]: event.target.value,
        showDates: false
    })

}
// date2() {
//     console.log('ppppp',this.value)
//     this.setAttribute(
//         "data-date",
//         moment(this.value, "YYYY-MM-DD")
//         .format( this.getAttribute("data-date-format") )
//     )
// }
refreshPage() {
    window.location.reload(false);
  }
box=(val)=>{
    // console.log('uuuuu')
    const{isDisplay}=this.state
   this.setState({
        isDisplay:!isDisplay
   })
}
showDatesWithLineBar= ()=>{
    if(this.state.startDate && this.state.endDate){
    if(this.state.startDate<this.state.endDate) {
        this.setState({
            showDatesWithLineBar:true
        })
    }else{
        toast.error('start year shoud be less than end year!')
    }
    }
    else{
        toast.error('Date field should not blank!') 
    }

}
//  fun() {
//     this.setAttribute(
//         "data-date",
//         moment(this.value, "YYYY-MM-DD")
//         .format( this.getAttribute("data-date-format") )
//     )
// }
render() {
    
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    return (
        <Fragment>
            <Navbar />
            <div className="row" style={{ display: 'flex' }}>
            <div className="time-line-styles">
                <input type="date" data-date="" format="YYYY" value={this.state.startDate} id="startDate" name="startDate" onChange={this.handleonChange} /><br />
                <input type="date" value={this.state.endDate} id="endDate" name="endDate" onChange={this.handleonChange} /><br />
                <button onClick={() => this.showDatesWithLineBar()} >Add</button>
                <button className="resetbutton" onClick={this.refreshPage}>Reset</button>
            </div>
        </div>
        <Draggable {...dragHandlers} className="mouse-pointer">
        <div className="row">
         {this.state.showDatesWithLineBar && <TimeLineWithBox startDate={this.state.startDate} endDate={this.state.endDate} ><div style={{backgroundColor:'red'}} ></div></TimeLineWithBox>}        
        </div>
        </Draggable>
        </Fragment>
    )
}
}
