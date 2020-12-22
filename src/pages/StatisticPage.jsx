import React, { useEffect, useState } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { bitcoinService } from '../services/bitcoinService.js';
import bitcoinImg from '../assets/bitcoin.png';
import { Converter } from '../components/Converter.jsx';


export function StatisticPage() {
    const [data, setData] = useState([])
    const [bitcoinRate, setBitcoinRate] = useState(0)

    useEffect(() => {
        loadData();
        loadBitcoinRate();
    }, [])

    const loadData = async () => {
        var data = await bitcoinService.getMarketPrice();
        data = data.values.map(value => value.y);
        setData(data)
    }

    const loadBitcoinRate = async () => {
        const bitcoinRate = await bitcoinService.getRate();
        setBitcoinRate(bitcoinRate);
    }
    return (
        <div className="statistic-section">
            <h1>Statistics:</h1>
            <div className="detail-container">
                <img src={bitcoinImg} alt="" />
                <div>Today's Bitcoin Rate: ${bitcoinRate}</div>
            </div>
            <Sparklines data={data}>
                <SparklinesLine style={{ fill: "yellow" }} />
                <SparklinesSpots />
            </Sparklines>
            <h3>₿ Bitcoin's Market Price - 2019-2020</h3>
            <Converter />
        </div>
    )
}
