<template>
  <ion-page>
    <ion-content>
      <ion-img src="https://www.13or-du-hiphop.fr/wp-content/uploads/2022/05/pnl-454.webp" alt="Image Concert" class="image"/>
      <form>
        <ion-item>
          <ion-label position="floating">Nom d'utilisateur</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Mot de passe</ion-label>
          <ion-input type="password" required></ion-input>
        </ion-item>
        <ion-button expand="block" type="submit">Se connecter</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonImg, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

export default {
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  }
};
</script>

<style scoped>
.image {
  padding: 10px;
  height: 50%;
}
</style>