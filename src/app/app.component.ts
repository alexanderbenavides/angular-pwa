import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationsService } from './services/push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-browser';
  public readonly VAPID_PUBLIC_KEY = 'BD8WfLqI-rGeFet6FxGxJMP6xFLv8uDW5-z5plalSUuBPFEMUINHXQHcnLwl9Z6vrj8yLE0sLIJx3wpU-OxjK7k';

  constructor(
    private swPush: SwPush,
    private pushNotificationsService: PushNotificationsService){
    this.suscribirseANotificaciones();
  }

  private suscribirseANotificaciones(): any {
    this.swPush.requestSubscription( {serverPublicKey: this.VAPID_PUBLIC_KEY} ).then(resp => {
      const token = JSON.parse(JSON.stringify(resp))
      this.pushNotificationsService.saveToken(token).subscribe({
        next(response: Object) {
          console.log('Data: ', response);
        },
        error(msg: any) {
          console.log('Error: ', msg);
        }
      });
    }).catch(err => console.log(err));
  }
}
