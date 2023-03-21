import { toastController } from '@ionic/vue';

export async function afficherToast(message,color){
    const toast = await toastController.create({
        message: message,
        duration: 2000,
        color: color,
        cssClass: "toast-" + color,
        buttons : [
            {
                text: "Fermer",
                role: "cancel"
            }
        ]
    });
    return await toast.present();
}