// src/utils/gpxParser.ts

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
    name?: string;
    segments: Array<Segment>;
}

export interface Segment {
    points: Array<Waypoint>;
}

export interface Route {
    name?: string;
    points: Array<Waypoint>;
}

export function parseGpx(gpxString: string): GpxData {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(gpxString, "application/xml");

    const waypoints: Waypoint[] = Array.from(xmlDoc.getElementsByTagName("wpt")).map(wpt => ({
        lat: parseFloat(wpt.getAttribute("lat") || "0"),
        lon: parseFloat(wpt.getAttribute("lon") || "0"),
        elevation: parseFloat(wpt.getElementsByTagName("ele")[0]?.textContent || "0"),
        time: wpt.getElementsByTagName("time")[0] ? new Date(wpt.getElementsByTagName("time")[0].textContent || "") : undefined,
    }));

    const tracks: Track[] = Array.from(xmlDoc.getElementsByTagName("trk")).map(trk => ({
        name: trk.getElementsByTagName("name")[0]?.textContent,
        segments: Array.from(trk.getElementsByTagName("trkseg")).map(trkseg => ({
            points: Array.from(trkseg.getElementsByTagName("trkpt")).map(trkpt => ({
                lat: parseFloat(trkpt.getAttribute("lat") || "0"),
                lon: parseFloat(trkpt.getAttribute("lon") || "0"),
                elevation: parseFloat(trkpt.getElementsByTagName("ele")[0]?.textContent || "0"),
                time: trkpt.getElementsByTagName("time")[0] ? new Date(trkpt.getElementsByTagName("time")[0].textContent || "") : undefined,
            })),
        })),
    }));

    const routes: Route[] = Array.from(xmlDoc.getElementsByTagName("rte")).map(rte => ({
        name: rte.getElementsByTagName("name")[0]?.textContent,
        points: Array.from(rte.getElementsByTagName("rtept")).map(rtept => ({
            lat: parseFloat(rtept.getAttribute("lat") || "0"),
            lon: parseFloat(rtept.getAttribute("lon") || "0"),
            elevation: parseFloat(rtept.getElementsByTagName("ele")[0]?.textContent || "0"),
            time: rtept.getElementsByTagName("time")[0] ? new Date(rtept.getElementsByTagName("time")[0].textContent || "") : undefined,
        })),
    }));

    return { waypoints, tracks, routes };
}