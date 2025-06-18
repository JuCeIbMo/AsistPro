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
  const imagesDir = path.join(__dirname, '../public/imgs/phone-mockups');
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
      await convertToWebP(inputPath, outputPath);
    }
  }
};

processImages();
