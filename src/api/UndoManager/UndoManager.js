export default class UndoManager {
  constructor(size = 50) {
    this.size = size;
    this.undoStack = new Queue(size);
    this.redoStack = new Queue(size);
  }

  doIt(undoAbleAction) {
    undoAbleAction.doAction();
    this.undoStack.push(undoAbleAction);
    this.redoStack = new Queue(this.size);
  }

  addIt(undoAbleAction) {
    this.undoStack.push(undoAbleAction);
    this.redoStack = new Queue(this.size);
  }

  undo(paramsObject) {
    const undoAbleAction = this.undoStack.pop();
    if (undoAbleAction) {
      undoAbleAction.undoAction(paramsObject);
      this.redoStack.push(undoAbleAction);
    }
  }

  redo(paramsObject) {
    const undoAbleAction = this.redoStack.pop();
    if (undoAbleAction) {
      undoAbleAction.doAction(paramsObject);
      this.undoStack.push(undoAbleAction);
    }
  }

  static actionBuilder() {
    return new UndoAbleActionBuilder();
  }
}

class UndoAbleActionBuilder {
  constructor() {
    this._doAction = null;
    this._undoAction = null;
  }

  doAction(lambda) {
    this._doAction = lambda;
    return this;
  }

  undoAction(lambda) {
    this._undoAction = lambda;
    return this;
  }

  build() {
    if ([this._undoAction, this._undoAction].some(x => x == null))
      throw "Forgot to set doAction or undoAction";
    return { doAction: this._doAction, undoAction: this._undoAction };
  }
}

class Queue {
  constructor(size = 50) {
    this.size = size;
    this.queue = [];
  }

  push(el) {
    if (this.queue.length === this.size) {
      this.queue.shift();
    }
    this.queue.push(el);
  }

  pop() {
    return this.queue.pop();
  }
}
