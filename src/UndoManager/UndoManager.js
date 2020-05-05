export default class UndoManager {
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }

  doIt(undoAbleAction) {
    undoAbleAction.doAction();
    this.undoStack.push(undoAbleAction);
    this.redoStack = [];
  }

  addIt(undoAbleAction) {
    this.undoStack.push(undoAbleAction);
    this.redoStack = [];
  }

  undo() {
    const undoAbleAction = this.undoStack.pop();
    if (undoAbleAction) {
      undoAbleAction.undoAction();
      this.redoStack.push(undoAbleAction);
    }
  }

  redo() {
    const undoAbleAction = this.redoStack.pop();
    if (undoAbleAction) {
      undoAbleAction.doAction();
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
