import React, { useState } from 'react';

const GpxUploader: React.FC = () => {
    const [gpxFile, setGpxFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setGpxFile(file);
        }
    };

    const handleUpload = () => {
        if (gpxFile) {
            // Logic to process the GPX file
            console.log('Uploading GPX file:', gpxFile.name);
            // Call a function to parse the GPX file here
        }
    };

    return (
        <div>
            <h2>Upload GPX File</h2>
            <input type="file" accept=".gpx" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!gpxFile}>
                Upload
            </button>
        </div>
    );
};

export default GpxUploader;