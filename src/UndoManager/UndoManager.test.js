import UndoManager from "./UndoManager";

test("Should do undo and redo", () => {
  let state = 0;
  const addAction = n =>
    UndoManager.actionBuilder()
      .doAction(() => (state = state + n))
      .undoAction(() => (state = state - n))
      .build();
  const addOne = addAction(1);
  const addTree = addAction(3);
  const addFive = addAction(5);

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
