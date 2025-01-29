```javascript
// bug.js
import React from 'react';
import { Image } from 'expo-image';

export default function App() {
  return (
    <Image
      source={require('./assets/image-not-found.png')} // Incorrect path
      style={{ width: 200, height: 200 }}
    />
  );
}
```
```javascript
// bugSolution.js
import React from 'react';
import { Image } from 'expo-image';

export default function App() {
  return (
    <Image
      source={require('./assets/my-image.png')} // Correct path
      style={{ width: 200, height: 200 }}
    />
  );
}
```