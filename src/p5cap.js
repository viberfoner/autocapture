class P5Cap {

  constructor(p, options) {
    this.p = p;
    this._pendingFrames = [];
    this.frames = [];
    this.totalFrames = options?.numFrames || 60;
    this.onComplete = null;
  }

  // push a promise that will resolve to a blob to the
  // frames array (this is done so that the frames stay
  // in order, since the canvas.toBlob function returns
  // asynchronously)
  captureCurrentFrame() {
    const canvas = this.p._curElement.elt;

    const blob = canvasToBlobPromise(canvas);
    this._pendingFrames.push(blob);
  }

  // stop the draw loop when frameCount reaches numFrames
  // then resolve the promise array to a blob array
  // containing the frames
  stop(){
    this.p.noLoop();
  }

  async getFrames() {
    this.stop();
    this.frames = await resolveFrames(this._pendingFrames);
    return this.frames;
  }

}

// promisify canvas.toBlob
function canvasToBlobPromise(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      resolve(blob);
    });
  });
}

// resolve an array of promises and return a new array
// with the results
async function resolveFrames(arr) {
  const resolvedArr = [];
  for (let i = 0; i < arr.length; i++) {
    resolvedArr[i] = await arr[i];
  }
  return resolvedArr;
}

export default P5Cap;