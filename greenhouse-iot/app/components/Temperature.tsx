'use client'
import React, { useEffect, useState } from 'react';
import { getTemperatureData } from '../services/temperatureService';
import { Temperature } from '../models/temperature';
import formatFirestoreTimestamp from "@/app/services/formatDate";
const TemperatureComponent = () => {
    const [temperatures, setTemperatures] = useState<Temperature[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTemperatureData();
            setTemperatures(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {temperatures.map(temp => (
                <div key={temp.id}>
                    <p>Temperature: {temp.temperature} at {formatFirestoreTimestamp(temp.time)}</p>
                </div>
            ))}
        </div>
    );
};

export default TemperatureComponent;
