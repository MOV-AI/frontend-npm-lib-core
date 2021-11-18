# UndoManager

Is an object that manages arbitrary undo and redo operations.

## Usage

### Constructors

```javascript
// With a default of 50 undo operations
const undoManager = new UndoManager();
const undoManagerWith100UndoOps = new UndoManager(100);
```

### Simple undo and redo

```javascript
let state = 0;
const addAction = n =>
  UndoManager.actionBuilder()
    // forward action
    .doAction(() => (state = state + n))
    // reverse action
    .undoAction(() => (state = state - n))
    .build();
const addOne = addAction(1);
const addTree = addAction(3);

const undoManager = new UndoManager();
undoManager.doIt(addOne); // state = 1
undoManager.doIt(addTree); // state = 4
undoManager.doIt(addOne); // state = 5
undoManager.undo(); // state = 4
undoManager.undo(); // state = 1
undoManager.redo(); // state = 4
console.log("State: " + state); // State: 4
```

### Undo and redo without doing any action

Sometimes we want to insert undoAbleActions in the queue of the UndoManager.

```javascript
let state = 4;
const undoManager = new UndoManager();
undoManager.addIt(addOne); // state = 4, queue : [addOne]
undoManager.doIt(addTree); // state = 4, queue : [addOne, addTree]
undoManager.undo(); // state = 1, queue : [addOne]
undoManager.undo(); // state = 0, queue : []
undoManager.redo(); // state = 1, queue : [addOne]
console.log("State: " + state); // State: 1
```

For further usages check unit tests.
