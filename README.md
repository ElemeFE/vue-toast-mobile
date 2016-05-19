# Overview
vue-toast-mobile is a mobile toast plugin for vue.js.

# Installation
First, install `vue-toast-mobile` from npm:
```bash
$ npm install vue-toast-mobile
```

Then use it:
```Javascript
// ES6 mudule
import Toast from 'vue-toast-mobile';

// CommonJS
const Toast = require('vue-toast-mobile').default;
```

# Usage
Basically you can pass a string to `Toast`:
```Javascript
Toast('Upload Completed');
```
Or invoke `Toast` with an object as its configuration:
```Javascript
Toast({
  message: 'Upload Completed',
  position: 'bottom',
  duration: 5000
});
```

# API
| Option    | Description                                    | Value                   | Default  |
|-----------|------------------------------------------------|-------------------------|----------|
| message   | content of the toast                           |                         |          |
| position  | location of the toast relative to viewport     | 'top' 'bottom' 'middle' | 'middle' | 
| duration  | time before the toast vanishes, in millisecond |                         | 3000     |
| className | custom class name of the toast                 |                         |          |
| iconClass | class name of the optional icon font           |                         |          |

# License
MIT
