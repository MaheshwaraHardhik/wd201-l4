/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
let today = new Date().toISOString().split("T")[0];
// eslint-disable-next-line no-undef
describe("Todo Test suite", () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  // eslint-disable-next-line no-undef
  test("should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    // eslint-disable-next-line no-undef
    expect(all.length).toBe(todoItemCount + 1);
  });
  // eslint-disable-next-line no-undef
  test("should mark a todo as completed", () => {
    // eslint-disable-next-line no-undef
    expect(all[0].completed).toBe(false);
    markAsComplete(0);

    expect(all[0].completed).toBe(true);
  });
  test("todos that are overdue", () => {
    let overdues = overdue();

    expect(
      overdues.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);});
test("todos that are duetoday", () => {
        let duetodays = dueToday();
    
        expect(
          duetodays.every((todo) => {
            return todo.dueDate == today;
          })
        ).toBe(true);

  });
  test("todos that are duelater", () => {
    let duelaters = dueLater();

    expect(
      duelaters.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);

});
});
