import assosiateController from '../controller/assosiate-controller';

export default class assosiateRoutes {
  static init(router) {
    router
      .route('/tsms/assosiate')
      .get(assosiateController.getAll)
      .post(assosiateController.createNew);

    router
      .route('/tsms/assosiate/:id')
      .delete(assosiateController.removeById)
    .get(assosiateController.getById);
  }
}
