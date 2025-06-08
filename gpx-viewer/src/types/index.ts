// src/types/index.ts

export interface GpxData {
    waypoints: Array<Waypoint>;
    tracks: Array<Track>;
    routes: Array<Route>;
}

export interface Waypoint {
    lat: number;
    lon: number;
    elevation?: number;
    time?: Date;
}

export interface Track {
    name: string;
    segments: Array<Segment>;
}

export interface Segment {
    points: Array<Waypoint>;
}

export interface Route {
    name: string;
    waypoints: Array<Waypoint>;
}

export interface MapProps {
    gpxData: GpxData;
    onMapLoad: () => void;
}