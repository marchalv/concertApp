<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Créer un concert</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <concert-form @concert="saveConcert" />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { useStore } from '../store/index';
import { useRouter } from 'vue-router';
import { afficherToast } from "../components/utils/toast.js";
import ConcertForm from "../components/ConcertForm.vue";

export default {
    name: 'AddConcert',

    setup() {
        const store = useStore();
        const router = useRouter();

        const concert = {
            name: '',
            description: '',
            date: '',
            time: '',
            category: ''
        }

        function saveConcert(concertEmit) {
            store.dispatch("addConcert", concertEmit).then((response) => {
                if (response.status === 200) {
                    afficherToast("Concert ajouté avec succès", "success");
                } else {
                    afficherToast("Erreur lors de l'ajout du concert", "danger");
                }
                router.push("/admin")
            });
        }

        return {
            saveConcert
        };
    },

    components: {
        IonContent,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle
    }
};
</script>