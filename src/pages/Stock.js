import React, { useState, useEffects, useEffect } from 'react'

const Stock = (props) => {

    const { symbol } = props.match.params

    const [stock, setStock] = useState(null)

    useEffect(() => {
        fetchStock()
    }, [])

    const fetchStock = async () => {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=c03e6a36094755307c87e5606e3839f8`)
        const data = await response.json()
        setStock(...data)
    }
    
    const loading = () => <h2>Loading {symbol} ...</h2>
    
    const loaded = () => {
        return (
            <>
                <h2>{symbol}</h2>
                <h3>Price: {stock.price}</h3>
                <h3>Volume: {stock.volume}</h3>
            </>
        )
    }

    return (
        <div className="dashboard-container">
            {stock ? loaded() : loading()}
        </div>
    )
}

export default Stock