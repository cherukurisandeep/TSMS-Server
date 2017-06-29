import mongoose from 'mongoose';
import Promise from 'bluebird';
import model from '../../../models';
import _ from 'lodash';

export default class resourceDAO{
  static getAll(_query) {
    return new Promise((resolve, reject) => {
      console.log('getall method called')
      //console.log(userSchema)
      model.resource.findAll({})
        .then(users => {
          //console.log('all users are'+JSON.stringify(users))
          resolve(users)
        }, (error) => {
          //console.log('Got error in get all method todo');
          reject(error);

        })
    })
  }
  static createNew(reqBody){
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = reqBody
     // console.log(_reqBody.fistname)
      model.resource.create({
        firstname: _reqBody.firstname,
        lastname: _reqBody.lastname,
        email : _reqBody.email,
        password : _reqBody.password,
        dob: _reqBody.dob,
        joindate : _reqBody.joindate,
        termdate : _reqBody.termdate,
        role : _reqBody.role
      }).then(users => {
        resolve(users)
      })
        .catch(error => {
          console.log(error);
          reject('Not Created ')

        })
    })
  }
  static  getById(_id) {
    var d = _id;
    let date = new Date(_id);
    if ( d.includes('@')) {
      return new Promise((resolve, reject) => {
        console.log('getById Dao');

        // _id = '%'+_id+'%'
        model.resource
          .find({where: {$or: [{email : _id}]}})
          .then((users) => {
            if (!users) {
              return reject(404)
            }
            else {
              return resolve(users)
            }
          }, (error) => {
            reject(error)
          })

      })
    }
    else {
      return new Promise((resolve, reject) => {
        console.log('getById Dao');
        // _id = '%'+_id+'%'
        model.resource
          .findAll({where: {id: _id}})
          .then((users) => {
            if (!users) {
              return reject(404)
            }
            else {
              return resolve(users)
            }
          }, (error) => {
            reject(error)
          })

      })
    }
  }
  static removeById(_id) {
    return new Promise((resolve, reject) => {
      console.log('in dao')
      model.resource
        .findById(_id)
        .then(user => {
          if (!user) {
            return reject(404);
          }
          return user
            .destroy()
            .then(() => {
              resolve(204);
            }, (error) => reject(error));
        }, (error) => {
          reject(error);
        });
    });
  }
  static update(_id,_reqBody) {
    return new Promise((resolve, reject) => {
      _id = _reqBody.id;
      console.log(_id);
      model.resource
        .update({
            id     : _reqBody.id,
            firstname: _reqBody.firstname,
            lastname : _reqBody.lastname,
            password: _reqBody.password,
            email      : _reqBody.email,
            dob: _reqBody.dob,
            joindate: _reqBody.joindate,
            termdate: _reqBody.termdate,
            role : _reqBody.role
          },
          {where: {id: _id}, returning: true, plain: true})
        .then((users) => {
          resolve(users)
        }, (error) => {
          reject(error)
        })
    })
  }


}
