import mongoose from 'mongoose';
import Promise from 'bluebird';
import model from '../../../models';
import _ from 'lodash';

export default class timesheetDAO{
  static createNew(reqBody){
    return new Promise((resolve,reject)=>{
      console.log("TimeSheet createNew");
      let _reqBody = reqBody
      console.log(",,,--->>>",_reqBody)
      model.timeSheet.create({
        resource_id : _reqBody.resource_id,
        startdate   : _reqBody.startdate,
        enddate     : _reqBody.enddate
      }).then(timesheet=>{
        resolve(timesheet)
      })
        .catch(error=>{
          console.log(error)
          reject("Not Created")
        })
    })
  }
  static getAll(){
    return new Promise((resolve,reject)=>{
      console.log("Time Sheet get all");
      model.timeSheet.findAll({})
        .then(timesheet=>{
          resolve(timesheet)
        })
        .catch(error=>{
          console.log(error)
          reject(error)
        })
    })
  }
  static getById(_id){
    let d = _id
    return new Promise((resolve,reject)=>{
      console.log("Time Sheet getBy Id");
      model.timeSheet.findAll({where:{resource_id:d}})
        .then(timesheet=>{
          resolve(timesheet)
        })
        .catch(error=>{
          console.log(error)
          reject(error)
        })
    })
  }
}
