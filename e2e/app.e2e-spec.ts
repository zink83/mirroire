import { GlassPage } from './app.po';

describe('glass App', () => {
  let page: GlassPage;

  beforeEach(() => {
    page = new GlassPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
