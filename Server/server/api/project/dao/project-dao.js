import mongoose from 'mongoose';
import Promise from 'bluebird';
import model from '../../../models';

import _ from 'lodash';

export default class projectDAO {
  static getAll(_query) {
    return new Promise((resolve, reject) => {
      console.log('getall method called')
      //console.log(userSchema)
      model.project.findAll({})
        .then(projects => {
          //console.log('all users are'+JSON.stringify(users))
          resolve(projects)
        }, (error) => {
          //console.log('Got error in get all method todo');
          reject(error);

        })
    })
  }

  static createNew(request) {
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = request

      model.project.create({
        name: _reqBody.name,
        description: _reqBody.description,
        startdate: _reqBody.startdate,
        enddate: _reqBody.enddate
      }).then(projects => {
        resolve(projects)
      })
        .catch(error => {
          reject('Not Created ')

        })
    })

  }

  static removeById(_id) {
    return new Promise((resolve, reject) => {
      console.log('in dao')
      model.project
        .findById(_id)
        .then(projects => {
          if (!projects) {
            return reject(404);
          }
          return projects
            .destroy()
            .then(() => {
              resolve(204);
            }, (error) => reject(error));
        }, (error) => {
          reject(error);
        });
    });

  }

  /*
   .find({where:{id : _id }} || { where : {username : _id}})

   */
  static  getById(_id) {
    console.log(typeof _id);
    return new Promise((resolve, reject) => {
      console.log('getById Dao');
      model.project
        .find({where: {$or: [{id: _id}]}})
        .then((projects) => {
          if (!projects) {
            return reject(404)
          }
          else {
            return resolve(projects)
          }
        }, (error) => {
          reject(error)
        })

    })
  }

  static update(_reqBody, _id) {
    return new Promise((resolve, reject) => {
      model.project
        .update({
            name: _reqBody.name,
            description : _reqBody.description,
            startdate: _reqBody.startdate,
            enddate: _reqBody.enddate
          },
          {where: {id: _id}, returning: true, plain: true})
        .then((projects) => {
          resolve(projects)
        }, (error) => {
          reject(error)
        })
    })
  }
}
