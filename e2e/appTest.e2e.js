describe('Test App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Ecommerce Store'))).toBeVisible();
  });

  it('should be opened product details page when product has been choose', async () => {
    await element(by.id('test-card')).atIndex(0).tap();
    await expect(element(by.text('Product Details'))).toBeVisible();
  });
});
