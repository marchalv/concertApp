<template>
  <ion-page>
    <ion-header>
        <ion-button color="danger" id="logoutButton" @click="logout">Se déconnecter</ion-button>
    </ion-header>
    <ion-content>
        <ion-img src="https://www.13or-du-hiphop.fr/wp-content/uploads/2022/05/pnl-454.webp" alt="Image Concert" class="image"/>
        <p>Bienvenue sur l'application My Concert</p>
        <ion-button expand="block" color="success">Créer un concert</ion-button>
        <ion-button expand="block" color="primary">Modifier un concert</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonImg, IonHeader, IonButton } from '@ionic/vue';

export default {
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonHeader,
    IonButton
  }
};
</script>

<style scoped>
.image {
  padding: 10px;
  height: 50%;
}

#logoutButton {
    position: right;
    top: 0;
    right: 0;
}

.button {
    align-items: center;
}
</style>