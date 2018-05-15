import { Component, Element } from '@stencil/core';

@Component({
  tag: 'app-home-options-menu'
})
export class AppHomeOptionsMenu {

  @Element() el: any;
  
  dismiss(data?: any) {
    
    (this.el.closest('ion-popover') as any).dismiss(data);
  }

  refreshItem() {

    this.dismiss();
    document.querySelector('ion-router').push('/profile/FromPopover');
  }

  render() {
    return[
      <ion-item onClick={ () => this.refreshItem() }>
        <ion-label>View Profile</ion-label>
      </ion-item>
    ];
  }
}