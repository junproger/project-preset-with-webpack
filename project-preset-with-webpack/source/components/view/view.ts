import hello from '../../assets/hello.png';
import { component } from '../../types/component';

export const view: component = () => {
  const element: HTMLElement = document.createElement('div');
  element.classList.add('title');
  const myImage: HTMLImageElement = new Image(256, 256);
  myImage.src = hello;
  element.append(myImage);
  const welcome = 'Welcome to awesome project! 🚀';
  element.append(welcome);
  return element;
};
