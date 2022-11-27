import autocap from './autocap';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

const main = async() => {
  const frames = await autocap({numFrames: 10})
  await ffmpeg.load();
  ffmpeg.FS('writeFile', 'test.png', await fetchFile(frames[0]));
  const ffmpegCmd = '-loop 1 -i test.png -c:v libx264 -t 3 -pix_fmt yuv420p -vf scale=400:400 out.mp4';
  const ffmpegArgs = ffmpegCmd.split(' ');
  await ffmpeg.run(...ffmpegArgs);

  const data = ffmpeg.FS('readFile', 'out.mp4');
  const blob = new Blob([data.buffer], { type: 'video/mp4' });
  const url = URL.createObjectURL(blob);

  const videoElement = document.createElement('video');
  videoElement.src = url;
  videoElement.controls = true;
  document.body.appendChild(videoElement);
}


main();