import { root } from '../../constants/root';
import { view } from '../view/view';

export const app = (): void => {
  const h1: HTMLHeadingElement = document.createElement('h1');
  h1.textContent = 'The Project Started!';

  root.append(h1);
  root.append(view());
};
