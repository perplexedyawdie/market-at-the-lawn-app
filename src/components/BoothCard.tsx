import { IonContent, IonSlides, IonSlide } from '@ionic/react';
import './BoothCard.css';
const BoothCard: React.FC = () => {
    // Optional parameters to pass to the swiper instance.
    // See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
        initialSlide: 1,
        speed: 400,
        pagination: false,
    };
    return (
        <IonSlides style={{height: '150px'}} pager={true} options={slideOpts}>
            <IonSlide>
                <h1>Slide 1</h1>
            </IonSlide>
            <IonSlide>
                <h1>Slide 2</h1>
            </IonSlide>
            <IonSlide>
                <h1>Slide 3</h1>
            </IonSlide>
        </IonSlides>
    );
};

export default BoothCard;
