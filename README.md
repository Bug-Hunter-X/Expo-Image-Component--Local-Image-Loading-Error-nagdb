# Expo Image Component Local Image Loading Error

This repository demonstrates a common error encountered when using Expo's `Image` component to load local images. The error arises from incorrect URIs or file access problems.

## Bug Description
The `Image` component fails to load a local image, resulting in a blank space or a broken image icon.

## Bug Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image in `App.js` doesn't load.

## Solution
The solution involves verifying the image path, ensuring the file exists, and checking any relevant file permissions.