import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'



type CurrType = {
    time:{
        updated: string,
        updatedISO: string,
        updateduk: string,
    },
    disclaimer: string,
    bpi:{
        USD: {
            code: string,
            rate: string,
            description: string,
            rate_float: number

        },
        THB:{
            code: string,
            rate: string,
            description: string,
            rate_float: number
        }

    }
}

const Current = () => {
    const [price, setPrice] = useState<CurrType | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    //fetch with async await
    const fetchApi = async () => {
        try {
            const resp =
                await axios.get<CurrType>('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
            setPrice(resp.data)
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            setError(true)
        }
    }


    useEffect(() => {
        fetchApi()
    }, [])

    const render = () => {
        if (loading)
            return <p className='text-2xl'>Loading ... </p>
        else if (error)
            return <p>There was some error !</p>
        else
            return (
                <div>
                    <p className='text-2xl'> {price?.bpi.THB.rate.toLocaleString()} THB</p>
                    <br></br>
                    <p> (Last updated {price?.time.updated}) </p>
                </div>

            )
    }

    return (
        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Current price</p>
            {render()}
        </div>
    )
}

export default Current