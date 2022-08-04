import { TruncateTextPipe } from '@pipes/truncate-text-pipe/truncate-text-pipe.pipe';

describe('TruncateTextPipePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateTextPipe();
    expect(pipe).toBeTruthy();
  });
});
