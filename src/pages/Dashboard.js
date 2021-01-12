import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [stocks, setStocks] = useState(null)

    const fetchSearch = async () => {
        const response  = await fetch(`https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=c03e6a36094755307c87e5606e3839f8`);
        const data = await response.json()
        setStocks([...data])
    }

    useEffect(() => {
        fetchSearch()
    }, [])

    const renderStocks = () => {
        return stocks.map(stock => {
            return (
                <div className="dashboard-row">
                    <div className="row-section">
                        <div className="symbol"><Link to={`/stocks/${stock.symbol}`}>{stock.symbol}</Link></div>
                        <div className="name">{stock.name}</div>
                    </div>
                    <div className="row-section">
                        <div className="currency">{stock.currency}</div>
                        <div className="exchange">{stock.exchangeShortName}</div>
                    </div>
                </div>
            )
        })
    }

    const loading = () => <h2>Loading...</h2>

    return (
        <div className="dashboard-container">
            <div className="dashboard-row">
                <div className="row-section">
                    <div className="symbol">Symbol</div>
                    <div className="name">Name</div>
                </div>
                <div className="row-section">
                    <div className="currency">Currency</div>
                    <div className="exchange">Exchange</div>
                </div>
            </div>
            {stocks ? renderStocks() : loading()}
        </div>
    )
}

export default Dashboard