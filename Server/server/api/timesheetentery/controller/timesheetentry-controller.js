import timesheetentryDAO from '../dao/timesheetentry-dao';

export default class timesheetentryController {
  static getAll(req, res) {
    timesheetentryDAO
      .getAll()
      .then(timesheetentrys => res.json(timesheetentrys))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _timesheetentry = req.body;

    timesheetentryDAO
      .createNew(_timesheetentry)
      .then(timesheetentry => res.json(timesheetentry))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    timesheetentryDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
  static getById(req,res){
    let _id = req.params.id;
    timesheetentryDAO
      .getById(_id)
      .then((result)=>res.json(result))
      .catch(error => res.status(400))
  }
  static update(req,res){
    let _reqBody= req.body;
    timesheetentryDAO
      .update(_reqBody)
      .then((result)=>res.json(result))
      .catch(error=>res.status(400))
  }
}
