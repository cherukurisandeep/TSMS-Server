import mongoose from 'mongoose';
import Promise from 'bluebird';
import model from '../../../models';
import _ from 'lodash';

export default class timesheetentryDAO {
  static createNew(reqBody){
    return new Promise((resolve,reject)=>{
      console.log("timeSheetEntry CreateNew");
      let _reqBody = reqBody
      console.log("<--->",_reqBody)

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
  static getById(_id){
    let id = _id
    console.log("<<<--->>>",id);
    return new Promise((resolve,reject)=>{
      model.timeSheetEntery.findAll({
        where:{timesheetId:id},
        include: [
          { model: model.project,as:'projects', required: true}
        ]
      })
        .then(result=>{
          resolve(result)
        })
        .catch(error=>{
          console.log(error)
          reject(error)
        })
    })
  }
  static update(_reqBody){
    let _reqbody = _reqBody
    console.log("<<-->",_reqbody)
    return new Promise((resolve,reject)=>{
      model.timeSheetEntery.update({
        timesheetId: _reqBody.timesheetId,
        project_id : _reqBody.project_id,
        time_date : _reqBody.time_date,
        hours   : _reqBody.hours
      },{where:{id : _reqbody.id},returning: true, plain: true})
        .then(result=>{
          resolve(result)
        },(error)=>{
          console.log(error);
          reject(error)
        })
    })
  }
}
