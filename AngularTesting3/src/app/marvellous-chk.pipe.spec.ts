// marvellous-chk.pipe.spec.ts
import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  let pipe: MarvellousChkPipe;

  beforeEach(() => {
    pipe = new MarvellousChkPipe();
  });

  it('should identify prime numbers', () => {
    expect(pipe.transform(7, 'Prime')).toBe('Prime');
  });

  it('should identify perfect numbers', () => {
    expect(pipe.transform(28, 'Perfect')).toBe('Perfect');
  });

  it('should identify even numbers', () => {
    expect(pipe.transform(10, 'Even')).toBe('Even');
  });

  it('should identify odd numbers', () => {
    expect(pipe.transform(11, 'Odd')).toBe('Odd');
  });

  it('should handle invalid parameter', () => {
    expect(pipe.transform(10, 'Invalid')).toBe('Invalid Parameter');
  });
});
