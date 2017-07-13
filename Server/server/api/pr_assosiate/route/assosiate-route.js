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
    router
      .route('/tsms/assosiates')
      .post(assosiateController.create);
    router
      .route('/tsms/assosiates/:id')
      .get(assosiateController.getByIdResource);
    router
      .route('/tsms/project/:p_id/resource/:r_id')
      .delete(assosiateController.deleteByIds);
  }
}
