const fs = require('fs');

export function saveCSVToFile(csvContent, fileName) {
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();

  URL.revokeObjectURL(url);
}

export function keypointsToCSV(keypoints) {
  if (!Array.isArray(keypoints) || keypoints.length === 0) {
    console.error('Invalid keypoints data');
    return;
  }

  // Define CSV header
  let csvContent = '';
  // for (let i = 1; i <= 50; i++) {
  //   csvContent += ',' + i;
  // }
  // csvContent += '\n';

  // Convert keypoints to CSV rows
  const rowValues = keypoints.map(keypoint => `${keypoint.x},${keypoint.y},${keypoint.score}`);
  csvContent += rowValues.join(',') + '\n';

  return csvContent;
}


