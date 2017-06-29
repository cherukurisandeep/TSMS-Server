import timesheetentryController from '../controller/timesheetentry-controller';

export default class timesheetentryRoutes {
  static init(router) {
    router
      .route('/tsms/timesheetentry')
      .get(timesheetentryController.getAll)
      .post(timesheetentryController.createNew);

    router
      .route('/tsms/timesheetentry/:id')
      .delete(timesheetentryController.removeById);
  }
}
