import { ROOT } from '../../constants/root';
import { appView } from '../view/appView';

export const myApp = (): void => {
  const h1: HTMLHeadingElement = document.createElement('h1');
  h1.textContent = 'The Project Started!';

  ROOT.append(h1);
  ROOT.append(appView());
};
