import dynamic from 'next/dynamic';
import {Suspense} from "react";
export default function Dashboard() {
    const Loader = dynamic(() => import('../components/loading'));
    const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
        ssr: false,loading: () => <Loader />,  // This will disable server-side rendering for this component
    });

    return (
        <div>
            <p>Hello, Dashboard!</p>
            <ClientOnlyComponent></ClientOnlyComponent>
        </div>
    );
}