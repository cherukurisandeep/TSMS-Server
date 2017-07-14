import resourceController from '../controller/resource-controller';

export default class resourceRoutes {
  static init(router) {
    router
      .route('/tsms/resource')
      .get(resourceController.getAll)
      .post(resourceController.createNew);

    router
      .route('/tsms/resource/:id')
      .get(resourceController.getById)
      .delete(resourceController.removeById)
      .put(resourceController.update);
    router
      .route('/tsms/login/:id/password/:password')
      .get(resourceController.getLogin);
  }
}
