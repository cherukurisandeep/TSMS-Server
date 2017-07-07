import mongoose from 'mongoose';
import Promise from 'bluebird';
import model from '../../../models';
import _ from 'lodash';

export default class timesheetentryDAO {
  static createNew(reqBody){
    return new Promise((resolve,reject)=>{
      console.log("timeSheetEntry CreateNew")
      let _reqBody = reqBody
      model.timeSheetEntery.create({
        timesheetId: _reqBody.timesheetId,
        project_id : _reqBody.project_id,
        time_date : _reqBody.time_date,
        hours   : _reqBody.hours
      })
        .then(timeSheetEntry=>{
          resolve(timeSheetEntry)
        })
        .catch(error=>{
          console.log(error)
          reject("Not Created");
        })
    })
  }
  static getAll(){
    return new Promise((resolve,reject)=>{
      console.log("timeSheetEntry GetAll")
      model.timeSheetEntery.findAll({})
        .then(timeSheetEntry=>{
          resolve(timeSheetEntry)
        })
        .catch(error=>{
          console.log(error)
          reject(error)
        })

    })
  }
}
