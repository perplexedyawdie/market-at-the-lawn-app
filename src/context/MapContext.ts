import { createContext } from 'react';
import { BoothDetails } from '../models/booth-details.model';

const MapContext = createContext<BoothDetails[] | null>(null);

export default MapContext;