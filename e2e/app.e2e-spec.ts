import { CampsitePage } from './app.po';

describe('campsite App', () => {
  let page: CampsitePage;

  beforeEach(() => {
    page = new CampsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
