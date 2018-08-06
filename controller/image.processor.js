var Jimp = require("jimp");

let imageProcessor = (url) => {
  return new Promise((resolve, reject) => {
    let __file__ = (url);
    let __re_file__ = (url);
    Jimp.read(__file__).then((img) => {
      img.resize(Jimp.AUTO, 1080);
      img.crop(0, 0, 800, 800);
      img.resize(800, 800, Jimp.HORIZONTAL_ALIGN_CENTER);
      img.quality(100)
      img.write(__re_file__, (err, data)=>{
        resolve(true);
      });
    }).catch((err) => {
      resolve(false);
      console.error(err);
    });
  });
}

module.exports = imageProcessor;