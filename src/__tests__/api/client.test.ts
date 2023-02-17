import { read } from '../../api/client';

describe('client', () => {
  test('should throw error 404 "Not found" on wrong endpoint', async () => {
    await expect(read('wrongendpoint')).rejects.toThrow('Not found');
  });

  test('should return array', async () => {
    const result = await read('country');
    expect(result.constructor.name === 'Array').toBeTruthy();
  });
});
