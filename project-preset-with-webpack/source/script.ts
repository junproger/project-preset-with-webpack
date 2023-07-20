import hello from './assets/hello.png';

export const script = (): HTMLDivElement => {
  const element: HTMLDivElement = document.createElement('div');
  element.classList.add('title');
  // Add the image to our existing div
  const myImage: HTMLImageElement = new Image(256, 256);
  myImage.src = hello;
  element.append(myImage);
  const welcome = 'Welcome to awesome project! 🚀';
  element.append(welcome);
  return element;
};
