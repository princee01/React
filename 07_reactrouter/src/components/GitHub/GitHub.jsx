import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
    const data = useLoaderData();
    // const [data, setdata] = useState(0);
    // useEffect(() => {
        
    //     fetch('https://api.github.com/users/princee01')
    //         .then(res => res.json())
    //         .then(data => {
    //             setdata(data);
    //     })
    // },[])
    return (
        <div className="text-center m-4 bg-gray-600 
        text-white p-4 text-3xl">GitHub followers: {data.followers}
        <img className="m=10 p-8" src={data.avatar_url} alt="123" width={300} />
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/princee01 ')
    return response.json();
}