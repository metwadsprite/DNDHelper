import React from 'react';
import { IonPage, IonHeader, IonContent, IonToolbar, IonButton, IonButtons, IonMenuButton, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonFab, IonIcon, IonFabButton } from '@ionic/react';

const DMPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start"><IonMenuButton/></IonButtons>
                    <IonTitle>Dungeon Master</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard color="success">
                    <IonCardHeader>
                        <IonCardTitle>Player 3</IonCardTitle>
                        <IonCardSubtitle>Level 10 class</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
                
                <IonCard color="success">
                    <IonCardHeader>
                        <IonCardTitle>Player 2</IonCardTitle>
                        <IonCardSubtitle>Level 10 class</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
                
                <IonCard color="success">
                    <IonCardHeader>
                        <IonCardTitle>Player 3</IonCardTitle>
                        <IonCardSubtitle>Level 10 class</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonCard color="danger">
                    <IonCardHeader>
                        <IonCardTitle>Enemy 1</IonCardTitle>
                        <IonCardSubtitle>Level 10 class</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonCard color="danger">
                    <IonCardHeader>
                        <IonCardTitle>Enemy 2</IonCardTitle>
                        <IonCardSubtitle>Level 10 class</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

                <IonFab vertical="bottom" horizontal="end">
                    <IonFabButton><IonIcon name="add"/></IonFabButton>
                </IonFab>

            </IonContent>
        </IonPage>
    );
};

export default DMPage;