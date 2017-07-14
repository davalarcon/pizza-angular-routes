import { PizzaPage } from './app.po';

describe('pizza App', () => {
  let page: PizzaPage;

  beforeEach(() => {
    page = new PizzaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
