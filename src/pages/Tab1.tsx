import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import BoothCard from '../components/BoothCard';
import BoothMap from '../components/BoothMap';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center" >Market at the Lawn Booths</IonTitle>
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
  );
};

export default Tab1;
