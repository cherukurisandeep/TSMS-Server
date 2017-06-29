import mongoose from 'mongoose';
import Promise from 'bluebird';
import model from '../../../models';
import _ from 'lodash';

export default class assosiateDAO{
  static createNew(request) {
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = request
      console.log(_reqBody.project_id)
      console.log(_reqBody.resource_id)
      model.pr_assosiation.create({
        project_id: _reqBody.project_id,
        resource_id: _reqBody.resource_id
      }).then(projects => {
        resolve(projects)
      })
        .catch(error => {
          console.log(error);
          reject('Not Created ')

        })
    })

  }
  static getAll(){
    return new Promise((resolve, reject) => {
      console.log('getall method in ass called')
      //console.log(userSchema)
      model.pr_assosiation.findAll({})
        .then(projects => {
          //console.log('all users are'+JSON.stringify(users))
          resolve(projects)
        }, (error) => {
          //console.log('Got error in get all method todo');
          reject(error);

        })
    })
  }
  //.find({where: {$or: [{id: _id}]}})
  static getById(id){
    return new Promise((resolve,reject)=>{
      console.log("getbyId")
      model.pr_assosiation
        .findAll({where :{project_id: id}})
        .then(ass =>{
        })
    })
  }
}
