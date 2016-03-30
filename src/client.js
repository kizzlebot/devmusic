import { render } from 'react-dom';
import { browserHistory } from 'react-router';



var createRoutes = require('./routes');
render(createRoutes(browserHistory), document.getElementById('react-root'));