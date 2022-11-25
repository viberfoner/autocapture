import P5Cap from './p5cap';

const autocap =  options => {
  return new Promise((resolve, reject) => {
  p5.prototype.createP5Cap = function() {
  const p5cap = new P5Cap(this, options);

    this.Cap = p5cap;
  }

  p5.prototype.captureCurrentFrame = function() {
    this.Cap.captureCurrentFrame();

    if (this.frameCount >= this.Cap.totalFrames) {
      this.Cap.getFrames().then(function(frames) {
        resolve(frames);
      })
    }
  }

  p5.prototype.registerMethod('init', p5.prototype.createP5Cap);
  p5.prototype.registerMethod('post', p5.prototype.captureCurrentFrame);
});
}
 
export default autocap;