import mongoose from 'mongoose';
import Promise from 'bluebird';
import timesheetentrySchema from '../model/timesheetentry-model';
import _ from 'lodash';

timesheetentrySchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    timesheetentry
    .find(_query)
    .exec(function(err, todos) {
      err ? reject(err)
      : resolve(todos);
    });
  });
}

timesheetentrySchema.statics.createNew = (timesheetentry) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(timesheetentry)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _something = new timesheetentry(timesheetentry);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

timesheetentrySchema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    timesheetentry
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const timesheetentry = mongoose.model('timesheetentry', timesheetentrySchema);

export default timesheetentry;
