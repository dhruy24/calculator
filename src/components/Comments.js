import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Comments() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(res.data);  // Set actual data, not the promise
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            {data?.map((ele, index) => {
                return (
                    <p key={index} data-testid="names">{ele.name}</p>
                )
            })}
        </div>
    )
}

export default Comments