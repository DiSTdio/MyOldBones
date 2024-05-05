import React, { useState } from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastnName: "",
            bio: "",
            age: 1,
            isHappy: false,
        }
    }
    render() {
    return (
        <form className="form">
            <input placeholder="First Name: YUMIKO" onChange={(event) => {this.setState({firstName: event.target.value,})}}></input>
            <input placeholder="Surname: HORIUCHI"></input>
            <textarea placeholder="Biography"></textarea>
            <input placeholder="Age"></input>
            <label htmlFor="isHappy">Happy? </label>
            <input type="checkbox" id="isHappy"></input>
            <p></p>
            <button type="button">Add User</button>
            
        </form>
        )
}

}



export default AddUser