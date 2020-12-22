import React, { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService.js'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export class Converter extends Component {
    state = {
        bitcoin: '',
        toCurr: 'USD',
        res: null,
        errMsg: ''

    }

    onConvert = async (ev) => {
        ev.preventDefault()
        if (!this.state.bitcoin) {
            this.setState({errMsg: 'Amount is required'})
            setTimeout(() => {
                this.setState({ errMsg: null });
            }, 2000);
            return;
        }
        const { bitcoin } = this.state
        const rate = await bitcoinService.getConvertRate();
        const res = (1 / +rate * +bitcoin).toFixed(2);
        this.setState({ res });
        console.log(rate);
    }

    handleChange = (ev) => {
        const { value, name,type } = ev.target;
        this.setState({ [name]: type==='number'? +value : value, res: null });
    };


    render() {
        const { res, bitcoin, toCurr } = this.state
        return (
            <section className="converter-container flex align-center justify-center">
                <form className="convert-form flex column space-between align-center" onSubmit={this.onConvert}>
                    <div className="main-container">
                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={bitcoin}
                            name="bitcoin"
                            placeholder="Enter amount"
                        />
                        <span className="from-currency">₿</span>
                        {/* <FontAwesomeIcon className="fa-icon" icon={faArrowRight} /> */}
                        <span className="from-currency">TO: $</span>
                    </div>
                    <span className="validation-error">{ this.state.errMsg }</span>
                {res &&
                    <div className="result">
                        <span className="given-amount">{bitcoin}</span>
                        <span className="base-currency">BTC</span>
                        {/* <FontAwesomeIcon className="fa-icon" icon={faArrowRight} /> */}
                        <span className="final-result">{res}</span>
                        <span className="second-currency">{toCurr}</span>
                    </div>}
                    <button className="calculate-btn" type="submit">Convert</button>
                </form>
            </section>
        )
    }
}

