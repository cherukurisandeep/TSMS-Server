import timesheetDAO from '../dao/timesheet-dao';

export default class timesheetController {
  static getAll(req, res) {
    timesheetDAO
      .getAll()
      .then(timesheets => res.json(timesheets))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _timesheet = req.body;
    console.log(",,---->>",_timesheet)
    timesheetDAO
      .createNew(_timesheet)
      .then(timesheet => res.json(timesheet))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    timesheetDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
  static getById(req,res){
    let _id = req.params.id;
    console.log("<-->",_id)
    timesheetDAO
      .getById(_id)
      .then((timesheets)=>res.json(timesheets))
      .catch(error => res.status(400).json(error))
  }
}
