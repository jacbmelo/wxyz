import { WxyzPage } from './app.po';

describe('wxyz App', function() {
  let page: WxyzPage;

  beforeEach(() => {
    page = new WxyzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
