<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Ajouter un utilisateur</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <form>
                <ion-item>
                    <ion-label position="floating">Nom d'utilisateur</ion-label>
                    <ion-input type="text" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Mot de passe</ion-label>
                    <ion-input type="password" required></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Rôle</ion-label>
                    <ion-input type="text" required></ion-input>
                </ion-item>
                <ion-button expand="block" type="submit">Ajouter</ion-button>
            </form>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

export default {
    name: 'AddUser',
    components: {
        IonContent,
        IonPage,
        IonItem,
        IonLabel,
        IonInput,
        IonButton
    }
};
</script>