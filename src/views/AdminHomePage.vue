<template>
  <ion-page>
    <ion-header>
        <ion-button color="danger" id="logoutButton" @click="logout">Se déconnecter</ion-button>
    </ion-header>
    <ion-content>
        <ion-img src="https://www.13or-du-hiphop.fr/wp-content/uploads/2022/05/pnl-454.webp" alt="Image Concert" class="image"/>
        <p>Bienvenue sur la partie admin de l'application My Concert</p>
        <ion-button router-link="/admin/addconcert" expand="block" color="success">Créer un concert</ion-button>
        <ion-button router-link="/admin/concerts" expand="block" color="primary">Modifier un concert</ion-button>
        <ion-button router-link="/admin/categories" expand="block" color="warning">Gerer les categories</ion-button>
        <ion-button router-link="/admin/users" expand="block" color="danger">Gerer les utilisateurs</ion-button>
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

</style>