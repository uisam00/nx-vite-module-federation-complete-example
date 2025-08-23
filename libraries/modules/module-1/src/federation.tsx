import * as ReactDOM from 'react-dom/client';
import Module1 from './lib/module-1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Module1 />);
