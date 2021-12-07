import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  navigateToH(){
    return browser.get('/home')
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  getPageTitle(){
    return element(by.css('ion-title')).getText();
  }

}
