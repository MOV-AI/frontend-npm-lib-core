# Clipboard

Is an object that copies data.

## Usage

### copy & paste

```javascript
const object2beCopied = { bla: 1 };
// copy: V -> undefined
Clipboard.copy(object2beCopied);
console.log("Paste object", Clipboard.paste());
```

### As a dictionary

```javascript
const object2beCopied = { bla: 1 };
const key = "key";
// copy: V -> undefined
Clipboard.write(key, object2beCopied);
console.log("Paste object", Clipboard.read(key));

// clear data
Clipboard.clear(key);
```

For further usages check unit tests.
