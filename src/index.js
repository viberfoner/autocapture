import autocap from './autocap';

autocap({numFrames: 10}).then(frames => {
  console.log(frames);
})