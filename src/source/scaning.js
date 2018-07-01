import RNTesseractOcr from 'react-native-tesseract-ocr';

const tessOptions = {
  whitelist: '1234567890'
};

export function ScanCard(imagePath) {
  return new Promise((resolve) => {
    RNTesseractOcr.recognize(imagePath, 'LANG_ENGLISH', tessOptions)
      .then((result) => {
        const data = result.split('\n');
        const scanResult = data.filter(num => num.length === 19);
        resolve({
          result: scanResult
        });
      })
      .done();
  });
}
