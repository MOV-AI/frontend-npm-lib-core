import UndoManager from "./UndoManager";

let state = 0;
const addAction = n =>
  UndoManager.actionBuilder()
    .doAction(() => (state = state + n))
    .undoAction(() => (state = state - n))
    .build();
const addOne = addAction(1);
const addTree = addAction(3);
const addFive = addAction(5);

beforeEach(() => {
  state = 0;
});

test("Should do undo and redo", () => {
  const undoManager = new UndoManager();
  const actions = []; // used for logging purposes
  actions.push({ action: () => undoManager.doIt(addOne), state: 1 });
  actions.push({ action: () => undoManager.doIt(addTree), state: 4 });
  actions.push({ action: () => undoManager.undo(), state: 1 });
  actions.push({ action: () => undoManager.undo(), state: 0 });
  actions.push({ action: () => undoManager.redo(), state: 1 });
  actions.push({ action: () => undoManager.doIt(addFive), state: 6 });
  actions.forEach(a => {
    a.action();
    expect(state).toBe(a.state);
  });
});

test("empty undo", () => {
  const undoManager = new UndoManager();
  const actions = []; // used for logging purposes
  actions.push({ action: () => undoManager.doIt(addOne), state: 1 });
  actions.push({ action: () => undoManager.doIt(addTree), state: 4 });
  actions.push({ action: () => undoManager.undo(), state: 1 });
  actions.push({ action: () => undoManager.undo(), state: 0 });
  actions.push({ action: () => undoManager.undo(), state: 0 });
  actions.push({ action: () => undoManager.undo(), state: 0 });
  actions.forEach(a => {
    a.action();
    expect(state).toBe(a.state);
  });
});

test("empty redo", () => {
  const undoManager = new UndoManager();
  const actions = []; // used for logging purposes
  actions.push({ action: () => undoManager.doIt(addOne), state: 1 });
  actions.push({ action: () => undoManager.doIt(addTree), state: 4 });
  actions.push({ action: () => undoManager.undo(), state: 1 });
  actions.push({ action: () => undoManager.undo(), state: 0 });
  actions.push({ action: () => undoManager.redo(), state: 1 });
  actions.push({ action: () => undoManager.redo(), state: 4 });
  actions.push({ action: () => undoManager.redo(), state: 4 });
  actions.forEach(a => {
    a.action();
    expect(state).toBe(a.state);
  });
});

test("should addIt", () => {
  const undoManager = new UndoManager();
  const actions = []; // used for logging purposes
  state = 4;
  actions.push({ action: () => undoManager.addIt(addOne), state: 4 });
  actions.push({ action: () => undoManager.addIt(addTree), state: 4 });
  actions.push({ action: () => undoManager.undo(), state: 1 });
  actions.push({ action: () => undoManager.undo(), state: 0 });
  actions.forEach(a => {
    a.action();
    expect(state).toBe(a.state);
  });
});

test("test undo limit", () => {
  const undoManager = new UndoManager(2);
  const actions = []; // used for logging purposes
  actions.push({ action: () => undoManager.doIt(addOne), state: 1 });
  actions.push({ action: () => undoManager.doIt(addTree), state: 4 });
  actions.push({ action: () => undoManager.doIt(addTree), state: 7 });
  actions.push({ action: () => undoManager.undo(), state: 4 });
  actions.push({ action: () => undoManager.undo(), state: 1 });
  actions.push({ action: () => undoManager.undo(), state: 1 });
  actions.forEach(a => {
    a.action();
    expect(state).toBe(a.state);
  });
});
