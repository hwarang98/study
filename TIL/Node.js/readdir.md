# Node.js에서 파일목록 알아내기

```javascript
const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, fileList) => {
    console.log(fileList);
});
// console -> ['file1', 'file2']
```

**배열** 형식으로 나온다.  