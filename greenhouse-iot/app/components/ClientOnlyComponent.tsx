'use client'
import {useEffect, useState} from "react";

const ClientOnlyComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            The width of the window is: {width}px
        </div>
    );
};

export default ClientOnlyComponent;
