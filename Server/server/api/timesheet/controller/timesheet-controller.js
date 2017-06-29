import timesheetDAO from '../dao/timesheet-dao';

export default class timesheetController {
  static getAll(req, res) {
    timesheetDAO
      .getAll()
      .then(timesheets => res.status(200).json(timesheets))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _timesheet = req.body;

    timesheetDAO
      .createNew(_timesheet)
      .then(timesheet => res.status(201).json(timesheet))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    timesheetDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
