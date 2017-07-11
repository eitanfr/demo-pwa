import { PwaDemoPage } from './app.po';

describe('pwa-demo App', () => {
  let page: PwaDemoPage;

  beforeEach(() => {
    page = new PwaDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
