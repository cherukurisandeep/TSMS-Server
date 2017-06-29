import mongoose from 'mongoose';
import Promise from 'bluebird';
import timesheetSchema from '../model/timesheet-model';
import _ from 'lodash';

timesheetSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    timesheet
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

timesheetSchema.statics.createNew = (timesheet) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(timesheet)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new timesheet(timesheet);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

timesheetSchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    timesheet
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const timesheet = mongoose.model('timesheet', timesheetSchema);

export default timesheet;
