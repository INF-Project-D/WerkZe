import * as index from '.';

it('should have exports', () => {
  expect(index).toBeTruthy();
  expect(Object.keys(index).length).toBeGreaterThan(0);
});
