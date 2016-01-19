A simple demo of testing Reachability with React Native (Android).

Fun facts from along the way:

- 'Unable to download JS bundle' screen? Look at the React Packager output

- React Devtools for Chrome are broken for now: [Where is the React Dev tool?](https://stackoverflow.com/questions/34280966/where-is-the-react-devtool)

- Here's some great stuff on Flexbox: [A guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
	- column-reverse and row-reverse are not allowed in React Native Flexbox 
	
- The docs at [Facebook documentation](https://facebook.github.io/react-native/docs/native-modules-android.html#content) describe a `ReactInstanceManager.builder()` that I don't see and guess has been refactored: Just put your `ReactPackage` into the `List<ReactPackage>` returned by com/reactreach/MainActivity.java: `getPackages()`

## License

The MIT License (MIT)

Copyright (c) 2016 Kevin Smith

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
