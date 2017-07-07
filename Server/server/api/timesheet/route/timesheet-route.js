import timesheetController from '../controller/timesheet-controller';

export default class timesheetRoutes {
  static init(router) {
    router
      .route('/tsms/timesheet')
      .get(timesheetController.getAll)
      .post(timesheetController.createNew);

    router
      .route('/tsms/timesheet/:id')
      .delete(timesheetController.removeById)
      .get(timesheetController.getById);

  }
}
