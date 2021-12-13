import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import BoothCard from '../components/BoothCard';
import BoothMap from '../components/BoothMap';
import MapContext from '../context/MapContext';
import { useState } from 'react';
import './Tab1.css';
import { BoothDetails } from '../models/booth-details.model';

const booths: BoothDetails[] = [
  {
    coords: [18.014481608252,-76.7907966391196],
    id: 1,
    name: 'Roti Shack'
  },
  {
    coords: [18.0146650529299,-76.7900612037336],
    id: 2,
    name: 'Sun Kissed Treats'
  },
  {
    coords: [18.0147491316768,-76.7902902737718],
    id: 3,
    name: 'Gemz By Dreenz'
  },
]
const Tab1: React.FC = () => {
  const [boothDetails, setBoothDetails] = useState<BoothDetails[]>(booths);
  return (
    <MapContext.Provider value={boothDetails}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="ion-text-center" >Market at the Lawn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonGrid>
            <IonRow>
              <IonCol size='12'>
                <BoothMap />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size='12'>
                <BoothCard />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </MapContext.Provider>
  );
};

export default Tab1;
