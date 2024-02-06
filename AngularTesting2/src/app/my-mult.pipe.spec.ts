// my-mult.pipe.spec.ts
import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('should multiply two numbers', () => {
    const pipe = new MyMultPipe();
    expect(pipe.transform(2, 3)).toBe(6); // 2 * 3 = 6
  });
});
