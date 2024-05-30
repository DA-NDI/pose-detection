import * as tf from '@tensorflow/tfjs';

// Load the TensorFlow.js model

export async function callModel() {

  const model = await tf.loadLayersModel('/Users/gupalo/Documents/models/nn_model/model.json');


  //const model = await loadLayersModel('https://drive.google.com/uc?export=download&id=1Im7E5qv4W0X93YFVpEngv_-azPaHuMZu');
  //yoga:
  //https://drive.google.com/uc?export=download&id=1i85rSzT8-lz24a7MNuvcdKgwxZz2b4-l
  //breakdance:
  //https://drive.google.com/uc?export=download&id=1Im7E5qv4W0X93YFVpEngv_-azPaHuMZu

  // JavaScript

  // const example = tf.fromPixels(webcamElement);  // for example
  // const prediction = model.predict(example);
  // console.log('prediction: ', prediction)

}
