import React, { Component } from 'react';
import { userService } from '../services/userService.js';
import { bitcoinService } from '../services/bitcoinService.js';
import { MoveList } from '../components/MoveList.jsx';
import coinsImg from '../assets/coins.png';
import bitcoinImg from '../assets/bitcoin.png';
export default class Home extends Component {
    state = {
        user: {},
        bitcoinRate: ''
    }

    componentDidMount() {
        this.loadUser();
        this.loadBitcoinRate();
    }

    async loadUser() {
        const user = await userService.getUser();
        this.setState({ user })
    }

    async loadBitcoinRate() {
        const bitcoinRate = await bitcoinService.getRate();
        this.setState({ bitcoinRate })
    }


    render() {
        const { user, bitcoinRate } = this.state;
        return (
            <div className="home-section">
                <div className="hero">
                    <h2>Hello {user.name}!</h2>
                </div>
                <main>
                    <h4>Your Balance:</h4>
                    <div className="detail-container">
                        <img src={coinsImg} alt="" />
                        <div>Coins: {user.coins}</div>
                    </div>
                    <div className="detail-container">
                        <img src={bitcoinImg} alt="" />
                        <div>Bitcoin Rate: ${bitcoinRate}</div>
                    </div>
                    <MoveList location={'home'} />
                </main>
            </div>
        )
    }
}
