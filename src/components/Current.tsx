import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react-router/node_modules/@types/react'


// type Currprice = {
//     // time.updated : string;
//     // bpi.THB.rate_float : number;
// }

const Current = () => {
    // const [price, setPrice] = useState<string>();
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(false)

    // //fetch with async await
    // const fetchApi = async () => {
    //     try {
    //         const resp =
    //             await axios.get("https://api.coindesk.com/v1/bpi/currentprice/thb.json")
    //         setPrice(resp.data)
    //         setLoading(false)
    //     }
    //     catch (err) {
    //         setLoading(false)
    //         setError(true)
    //     }
    // }

    // useEffect(() => {
    //     fetchApi()
    // }, [])

    const render = () => {
        // if (loading)
        //     return <p className='text-2xl'>Loading ... </p>
        // else if (error)
        //     return <p>There was some error !</p>
        // else
            return (
                <div>
                    {/* <p>{price}</p> */}
                    <p className='text-2xl'>{(90000000).toLocaleString()} THB</p>
                    <p> (Last updated) </p>
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