import RNTesseractOcr from 'react-native-tesseract-ocr';

const tessOptions = {
  whitelist: '1234567890'
  // blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>'
};

export function ScanCard(imagePath) {
  console.log('a');
  return new Promise((resolve) => {
    RNTesseractOcr.recognize(imagePath, 'LANG_ENGLISH', tessOptions)
      .then((result) => {
        console.log(result);
        const a = result.split('\n');
        const b = a.filter(num => num.length === 19);
        console.log('result', b);
        resolve({
          result: b
        });
      })
      .done();
  });
}
