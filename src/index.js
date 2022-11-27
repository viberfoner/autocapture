import autocap from './autocap';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

const ffmpeg = createFFmpeg({ log: true });

const padWithZeros = (num, padAmt) => {
  return String(num).padStart(padAmt, '0');
}

const writeFrames = async (ffmpeg, frames, zeroPadding) => {
  for (let i = 0; i < frames.length; i++) {
    const fname = padWithZeros(i, zeroPadding) + '.png';
    ffmpeg.FS('writeFile', fname, await fetchFile(frames[i]));
  }
}

const main = async () => {
  const frames = await autocap({numFrames: 300});
  console.log(frames);
  await ffmpeg.load();

  const zeroPadding = String(frames.length).length;
  const zeroPaddingPadded = padWithZeros(zeroPadding, 2)

  await writeFrames(ffmpeg, frames, zeroPadding);

  const ffmpegCmd = `-r 60 -i %${zeroPaddingPadded}d.png -c:v libx264 -t 3 -pix_fmt yuv420p -vf scale=400:400 out.mp4`;
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