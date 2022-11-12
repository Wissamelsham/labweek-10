import React from "react";
export default class Student extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            x: 1
        }
        //this.handleAddEvent = this.handleAddEvent.bind(this)
    }

    handleAddEvent = () => {
        this.setState({x : this.state.x + 1})
        console.log("Add Clicked: " + this.state.x)
    }

    handleEvent = (event) => {
        console.log(event)
    }

    render(){
        return(
            <>
                <h2>Student Component</h2>
                X: {this.state.x}
                <button 
                    onClick={() => this.handleAddEvent}>Add</button>
                <button 
                    name="btnEvent"
                    value="Event"
                    onClick={(event) => this.handleEvent(event)}>Event Object</button>
            </>
        )
    }
}