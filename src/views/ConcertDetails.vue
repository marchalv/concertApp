<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ concert.name }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ concert.name }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p>{{ concert.description }}</p>
                    <p>{{ concert.date }}</p>
                    <p>{{ concert.price }}</p>
                    <p>{{ concert.category }}</p>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { useStore } from '../store/index';
import { computed } from 'vue';

export default {
    name: 'ConcertDetails',

    setup() {
        const store = useStore();

        const concert = computed(() => store.state.concert);
        store.dispatch('loadConcert');
    },

    components: {
        IonContent,
        IonPage,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonHeader,
        IonToolbar,
        IonTitle
    }
};
</script>