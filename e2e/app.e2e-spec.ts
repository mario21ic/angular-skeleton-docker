import { AngularSkeletonDockerPage } from './app.po';

describe('angular-skeleton-docker App', () => {
  let page: AngularSkeletonDockerPage;

  beforeEach(() => {
    page = new AngularSkeletonDockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
