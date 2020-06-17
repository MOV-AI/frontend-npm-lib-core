/**
 * Undo Manager class
 */
export default class UndoManager {
  /**
   *
   * @param {*} size: number of possible undo operations without overwrite
   */
  constructor(size = 50) {
    this.size = size;
    this.undoStack = new Queue(size);
    this.redoStack = new Queue(size);
  }

  /**
   * Do and stores undoAbleAction
   * @param {*} undoAbleAction
   */
  doIt(undoAbleAction) {
    undoAbleAction.doAction();
    this.undoStack.push(undoAbleAction);
    this.redoStack = new Queue(this.size);
  }

  /**
   * Just stores undoAbleAction
   * @param {*} undoAbleAction
   */
  addIt(undoAbleAction) {
    this.undoStack.push(undoAbleAction);
    this.redoStack = new Queue(this.size);
  }

  /**
   * Undo last undoAbleAction
   */
  undo() {
    const undoAbleAction = this.undoStack.pop();
    if (undoAbleAction) {
      undoAbleAction.undoAction();
      this.redoStack.push(undoAbleAction);
    }
  }

  /**
   * Redo last undoAbleAction
   */
  redo() {
    const undoAbleAction = this.redoStack.pop();
    if (undoAbleAction) {
      undoAbleAction.doAction();
      this.undoStack.push(undoAbleAction);
    }
  }

  /**
   * Creates UndoAbleAction instance
   */
  static actionBuilder() {
    return new UndoAbleActionBuilder();
  }
}

/**
 * Private Builder pattern for UndoAbleActions
 */
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

/**
 * Private Queue data structure
 */
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
