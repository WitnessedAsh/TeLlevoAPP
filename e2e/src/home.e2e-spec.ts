import { AppPage } from './app.po';

describe('Home Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('El titulo es home', () => {
    page.navigateToH();
    expect(page.getPageTitle()).toContain('home');
  });
});
