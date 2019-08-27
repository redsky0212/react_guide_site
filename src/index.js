import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

import * as serviceWorker from './serviceWorker';

import 'resources/css/style.css';
import 'resources/css/nanumsquareround.css';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();