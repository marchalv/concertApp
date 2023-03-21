<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Catégories</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item v-for="category in categories" :key="category.id" :routerLink="'/category/' + category.id">
                    <ion-label>
                        <h2>{{ category.name }}</h2>
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
    name: 'CategoriesList',

    setup() {
        const store = useStore();

        const categories = computed(() => store.state.categories);
        store.dispatch('loadCategories');
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