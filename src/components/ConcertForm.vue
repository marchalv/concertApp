<template>
    <form @submit.prevent="submitForm">
        <ion-item>
            <ion-label position="floating">Nom du concert</ion-label>
            <ion-input type="text" required></ion-input>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Description du concert</ion-label>
            <ion-textarea required></ion-textarea>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Date du concert</ion-label>
            <ion-input type="date" required></ion-input>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Heure du concert</ion-label>
            <ion-input type="time" required></ion-input>
        </ion-item>
        <ion-item>
            <ion-label position="floating">Catégorie du concert</ion-label>
            <ion-select required>
                <ion-select-option value="rap">Rap</ion-select-option>
                <ion-select-option value="rock">Rock</ion-select-option>
                <ion-select-option value="electro">Electro</ion-select-option>
                <ion-select-option value="classique">Classique</ion-select-option>
            </ion-select>
        </ion-item>
        <ion-button expand="block" type="submit">Créer le concert</ion-button>>
    </form>
</template>

<script>
import { IonItem, IonLabel, IonInput, IonButton, IonTextarea, IonSelect, IonSelectOption } from '@ionic/vue';
import { useStore } from '../store/index';
import { useRouter } from 'vue-router';

export default {
    name: 'ConcertForm',
    components: {
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonTextarea,
        IonSelect,
        IonSelectOption
    },
}
</script>