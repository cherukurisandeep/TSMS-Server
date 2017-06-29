import TodoController from "../controller/todo-controller";

export default class TodoRoutes {
  static init(router) {
    router
    .route("/tsms/todos")
    .get(TodoController.getAll)
    .post(TodoController.createTodo);

    router
    .route("/tsms/todos/:id")
    .delete(TodoController.deleteTodo);
  }
}
