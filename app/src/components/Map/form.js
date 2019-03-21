import React, { Component } from "react";
import "./style.css";

class Form extends Component {
    // Setting the component's initial state
    state = {
        zipcode: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "zipcode") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.setState({
            zipcode: ""
        });
    };
    render() {
       
        return (
            <div>
                <form className="form">

                    <input
                        value={this.state.zipcode}
                        name="zipcode"
                        onChange={this.handleInputChange}
                        type="zipcode"
                        placeholder="Zip Code"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;



