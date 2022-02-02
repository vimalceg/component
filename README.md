```
let isWorkspace = true;
const _getCliPath = isWorkspace ? (libName) => path.join(__dirname, '..', '..', '..', '.bin', libName) : !isNodeModuleUnderAppFolder
  ? libName => path.join(__dirname, '..', 'node_modules', '.bin', libName)
  : libName => libName;
```
