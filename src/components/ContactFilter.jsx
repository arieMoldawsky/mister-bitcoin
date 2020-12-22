import React, { Component } from 'react'

export class ContactFilter extends Component {
    state = {
        name: ''
    }

    onHandleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({[field]: value}, () => {
            this.props.onSetFilter({...this.state})
        })
    }

    render() {
        const {name} = this.state;
        return (
            <form onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">Filter: </label>
                <input name="name" type="text" value={name} onChange={this.onHandleChange} />
            </form>
        )
    }
}