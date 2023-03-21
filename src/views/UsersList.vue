<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Utilisateurs</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="user in users" :key="user.id" :routerLink="'/user/' + user.id">
                    <ion-label>
                        <h2>{{ user.username }}</h2>
                        <p>{{ user.email }}</p>
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
    name: 'UsersList',

    setup() {
        const store = useStore();

        const users = computed(() => store.state.users);
        store.dispatch('loadUsers');
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