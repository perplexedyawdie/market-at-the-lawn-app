import { IonContent, IonSlides, IonSlide, IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonChip, IonIcon, IonLabel, IonText, IonButton } from '@ionic/react';
import { restaurantOutline, logoInstagram, globeOutline, sparklesOutline, logoWhatsapp, diamondOutline } from 'ionicons/icons';
import './BoothCard.css';
const BoothCard: React.FC = () => {
    // Optional parameters to pass to the swiper instance.
    // See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
        initialSlide: 1,
        speed: 400,
        pagination: false,
    };

    function findBooth(coords: number[], id: number) {
        
    }
    return (
        <IonSlides style={{ height: '200px' }} pager={true} options={slideOpts}>
            <IonSlide>
                <IonGrid>
                    <IonCard>
                        <IonCardContent className='ion-no-padding'>
                            <IonRow>
                                <IonCol>
                                    <IonRow>
                                        <IonCol style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <IonChip>
                                                <IonIcon icon={restaurantOutline} color="primary" />
                                                <IonLabel>Food and Drinks</IonLabel>
                                            </IonChip>
                                            <div>
                                                <IonIcon className='ion-margin-end' icon={logoInstagram} color="primary" />
                                                <IonIcon icon={logoWhatsapp} color="primary" />
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol className='ion-text-start' style={{paddingLeft: '12px'}}>
                                            <IonText>Roti Shack</IonText> <br />
                                            <IonText>10:00AM - 4:00PM</IonText>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton onClick={() => findBooth([18.014481608252,-76.7907966391196], 1)} expand='block' shape="round" fill="solid">
                                                Find Me
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                </IonGrid>
            </IonSlide>
            <IonSlide>
                <IonGrid>
                    <IonCard>
                        <IonCardContent className='ion-no-padding'>
                            <IonRow>
                                <IonCol>
                                    <IonRow>
                                        <IonCol style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <IonChip>
                                                <IonIcon icon={sparklesOutline} color="primary" />
                                                <IonLabel>Beauty</IonLabel>
                                            </IonChip>
                                            <div>
                                                <IonIcon className='ion-margin-end' icon={logoInstagram} color="primary" />
                                                <IonIcon icon={globeOutline} color="primary" />
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol className='ion-text-start' style={{paddingLeft: '12px'}}>
                                            <IonText>Sun Kissed Treats</IonText> <br />
                                            <IonText>10:00AM - 4:00PM</IonText>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton onClick={() => findBooth([18.0146650529299,-76.7900612037336], 2)} expand='block' shape="round" fill="solid">
                                                Find Me
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                </IonGrid>
            </IonSlide>
            <IonSlide>
                <IonGrid>
                    <IonCard>
                        <IonCardContent className='ion-no-padding'>
                            <IonRow>
                                <IonCol>
                                    <IonRow>
                                        <IonCol style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <IonChip>
                                                <IonIcon icon={diamondOutline} color="primary" />
                                                <IonLabel>Jewelry</IonLabel>
                                            </IonChip>
                                            <div>
                                                <IonIcon className='ion-margin-end' icon={logoInstagram} color="primary" />
                                                <IonIcon icon={globeOutline} color="primary" />
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol className='ion-text-start' style={{paddingLeft: '12px'}}>
                                            <IonText>Gemz By Dreenz</IonText> <br />
                                            <IonText>10:00AM - 4:00PM</IonText>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton onClick={() => findBooth([18.0147491316768,-76.7902902737718], 3)} expand='block' shape="round" fill="solid">
                                                Find Me
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                    </IonCard>
                </IonGrid>
            </IonSlide>
        </IonSlides>
    );
};

export default BoothCard;
