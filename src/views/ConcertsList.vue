<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Concerts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="concert in concerts" :key="concert.id" :routerLink="'/concert/' + concert.id">
                    <ion-label>
                        <h2>{{ concert.name }}</h2>
                        <p>{{ concert.description }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonList } from '@ionic/vue';
import { useStore } from '../store/index';
import { computed } from 'vue';

export default {
    name: 'ConcertsList',

    setup() {
        const store = useStore();

        const concerts = computed(() => store.state.concerts);
        store.dispatch('loadConcerts');
    },

    components: {
        IonContent,
        IonPage,
        IonItem,
        IonLabel,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonList
    }
};


</script>