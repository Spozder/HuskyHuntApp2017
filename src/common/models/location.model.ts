import { Hint, mockHints } from './hint.model'

export interface Location {
    name: String;
    lat: number;
    lng: number;
    address: String;
    hint: Hint;
    assignment: number;
}

export const mockLocations: [Location] = [
    {
        name: 'Fake Location #1',
        lat: 42.3379668,
        lng: -71.0991816,
        address: '111 Location St',
        hint: mockHints[0],
        assignment: 1
    },
    {
        name: 'Fake Location #2',
        lat: 42.340,
        lng: -71.099,
        address: '222 Location Ave',
        hint: mockHints[1],
        assignment: 2 
    }
]