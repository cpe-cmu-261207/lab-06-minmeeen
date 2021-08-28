import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom";

type PType = {
    bpi: any
    disclaimer: string
    time: {
        updated: string,
        updatedISO: string
    }

}


const HistoryResult = () => {
    const [price, setPrice] = useState<PType | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    let s = query.get("start");
    let e = query.get("end");

    //fetch with async await
    const fetchApi = async () => {
        try {
            const resp =
                await axios.get<PType>('https://api.coindesk.com/v1/bpi/historical/close.json?currency=THB&start='+ s + '&end=' +e)
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

    const pr = () => {
        let a = [];

        for (const [key, value] of Object.entries(price?.bpi)) {
            a.push(key + ' - ' + value + ' THB');
        }
        const b = a.map(x => <ul className="nobull"><li> {x} </li></ul>)
        return b;
    }

    const render = () => {
        if (loading)
            return <p className='text-2xl'>Loading ...</p>
        else if (error)
            return <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        else
            return (
                <div>
                    <p className='text-xl font-semibold'> ( From {s} To {e} )</p>
                    <p className='text-xl'>
                     {pr()}   
                    </p>
                    
                </div>

            )
    }


    return (

        <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>Historical price</p>
            {render()}
        </div>
    )
}

export default HistoryResult