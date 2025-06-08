import { useState } from 'react';
import { parseGpx } from '../utils/gpxParser';
import { GpxData } from '../types';

const useGpxParser = () => {
    const [gpxData, setGpxData] = useState<GpxData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const parseFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const result = event.target?.result as string;
                const parsedData = parseGpx(result);
                setGpxData(parsedData);
                setError(null);
            } catch (err) {
                setError('Failed to parse GPX file');
                setGpxData(null);
            }
        };
        reader.onerror = () => {
            setError('Failed to read file');
            setGpxData(null);
        };
        reader.readAsText(file);
    };

    return { gpxData, error, parseFile };
};

export default useGpxParser;