// my-add.pipe.spec.ts
import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('should add two numbers', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(2, 3)).toBe(5); // 2 + 3 = 5
  });
});
