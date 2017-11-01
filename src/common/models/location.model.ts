import { Hint, mockHints } from './hint.model'

export interface Location {
    name: string;
    lat: number;
    lng: number;
    address: string;
    hint: Hint;
    assignment: number;
}

export const mockLocations: [Location] = [
    {
        name: 'Isabella Stewart Gardner Museum',
        lat: 42.33818,
        lng: -71.099121,
        address: 'Isabella Stewart Gardner Museum, Evans Way, Boston, MA, United States',
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