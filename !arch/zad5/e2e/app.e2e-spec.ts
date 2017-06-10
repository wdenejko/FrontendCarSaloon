import { Zad4Page } from './app.po';

describe('zad4 App', () => {
  let page: Zad4Page;

  beforeEach(() => {
    page = new Zad4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
