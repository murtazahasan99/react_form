import React, { Component } from 'react';

class Normal extends Component {
    constructor() {
        super()

        this.state = {
            text: "hello world",
            select: "",
            checked: false,
            radio: "1"
        }
    }


    chtext = (e) => {
        this.setState({
            text: e.target.value

        })
    }

    chselect = (e) => {
        this.setState({
            select: e.target.value
        })

    }

    chcheck = (e) => {
        this.setState({
            checked: e.target.checked
        })

    }

    chradio = (e) => {
        this.setState({
            radio: e.target.value
        })
    }

    //this method i can use it rather than all above function to setstate
    setVal = (e) => {
        const name = e.target.name
        const type = e.target.type
        let value = ''

        if (type === "checkbox")
            value = e.target.checked
        else
            value = e.target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h1>normal from</h1>
                <input name="text" value={this.state.text} onChange={this.setVal} />
                {/* //or onChange={this.chtext} */}

                <select name="select" value={this.state.select} onChange={this.setVal}>
                    {/* //or onChange={this.chselect} */}
                    <option value="ali">ali</option>
                    <option value="murtaza">murtaza </option>
                </select>

                <label>checked
        <input name="checked" type="checkbox" checked={this.state.checked} onChange={this.setVal} />
                    {/* or  onChange={this.chcheck} */}
                </label>

                <div onChange={this.setVal}>
                    {/*  or onChange={this.chradio} */}
                    <input name="radio" type="radio" value="1" checked={this.state.radio === "1"} />one
          <input name="radio" type="radio" value="2" checked={this.state.radio === "2"} />two
        </div>
            </div>
        );
    }
}
export default Normal;