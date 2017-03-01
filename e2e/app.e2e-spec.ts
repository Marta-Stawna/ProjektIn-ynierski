import { ProjektyPage } from './app.po';

describe('projekty App', function() {
  let page: ProjektyPage;

  beforeEach(() => {
    page = new ProjektyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
