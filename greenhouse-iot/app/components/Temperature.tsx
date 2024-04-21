'use client'
import React, { useEffect, useState } from 'react';
import { getTemperatureData } from '../services/temperatureService';
import { Temperature } from '../models/temperature';

const TemperatureComponent = () => {
    const [temperatures, setTemperatures] = useState<Temperature[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTemperatureData();
            setTemperatures(data);
            console.log(temperatures)
        };
        fetchData();
    }, []);

    return (
        <div>
            {temperatures.map(temp => (
                <div key={temp.id}>
                    <p>Temperature: {temp.temperature} at {temp.id}</p>
                </div>
            ))}
        </div>
    );
};

export default TemperatureComponent;
