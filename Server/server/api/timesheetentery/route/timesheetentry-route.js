import timesheetentryController from '../controller/timesheetentry-controller';

export default class timesheetentryRoutes {
  static init(router) {
    router
      .route('/tsms/timesheetentry')
      .get(timesheetentryController.getAll)
      .post(timesheetentryController.createNew)
      .put(timesheetentryController.update);

    router
      .route('/tsms/timesheetentry/:id')
      .delete(timesheetentryController.removeById)
      .get(timesheetentryController.getById);
  }
}
