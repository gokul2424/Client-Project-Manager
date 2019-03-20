import { UseridPipe } from './userid.pipe';

describe('UseridPipe', () => {
  it('create an instance', () => {
    const pipe = new UseridPipe();
    expect(pipe).toBeTruthy();
  });
});
