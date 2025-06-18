const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const convertToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (err) {
    console.error(`Error converting ${inputPath}:`, err);
  }
};

const processImages = async () => {
  const imagesToConvert = [
    'public/imgs/stars.png',
    'public/imgs/grid-lines.png',
    'public/imgs/product-image.png',
    'public/imgs/avatar-1.png',
    'public/imgs/avatar-2.png',
    'public/imgs/avatar-3.png',
    'public/imgs/avatar-4.png',
    'public/imgs/logo-acme.png',
    'public/imgs/logo-apex.png',
    'public/imgs/logo-celestial.png',
    'public/imgs/logo-quantum.png',
    'public/imgs/logo-pulse.png',
    'public/imgs/logo-echo.png'
  ];

  for (const imgPath of imagesToConvert) {
    if (fs.existsSync(imgPath)) {
      const outputPath = imgPath.replace('.png', '.webp');
      await convertToWebP(imgPath, outputPath);
    }
  }
};

processImages();
