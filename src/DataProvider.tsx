import { useState, useEffect } from "react";

interface DataProviderProps {
    render: (props: { data: string | null; loading: boolean }) => JSX.Element;
}

function DataProvider({ render }: DataProviderProps) {
    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setData("Fetched Data");
            setLoading(false);
        }, 1000);
    }, []);

    // Calls the render prop function and passes the state
    return render({ data, loading });
}

export default DataProvider;
