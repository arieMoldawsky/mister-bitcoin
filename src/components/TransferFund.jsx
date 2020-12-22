
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { userService } from '../services/userService';

class _TransferFund extends Component {
    state = {
        amount: 0
    }

    onTransferCoins = (ev) => {
        ev.preventDefault();
        const toUser = this.props.contact;
        const amount = +this.state.amount;
        if (amount > 0) userService.transferCoins(toUser, amount);
        this.props.history.push('/');
    }

    onHandleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ [field]: value })
    }

    render() {
        return (
            <div className="transfer-section" >
                <div>Transfer coins to Dominique Soto:</div>
                <form action="" onSubmit={this.onTransferCoins}>
                    <label htmlFor="">Amount:</label>
                    <input max={+userService.getUser().coins} min={0} type="number" name="amount" value={this.state.amount} onChange={this.onHandleChange} id="" />
                    <button>Transfer</button>
                </form>
            </div >
        )
    }
}

export const TransferFund = withRouter(_TransferFund);