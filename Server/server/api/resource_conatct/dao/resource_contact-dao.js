import mongoose from 'mongoose';
import Promise from 'bluebird';
//import resource_contactSchema from '../model/resource_contact-model';
import model from '../../../models';
import _ from 'lodash';

export default class  resource_contactDAO{
  static createNew(reqBody){
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew mrthod in dao')
      let _reqBody = reqBody
      model.resource.findById(_reqBody.resource_id).then(resource=>{
        if(!resource){
          reject('Resource Id is missing')
        }
        else{
          var a = Object.keys(model.resource_contact.rawAttributes)
          var contact = {
            contact_type: _reqBody.contact_type,
            resource_id: resource.id,
            contact: _reqBody.contact
          }
          console.log('---contact:',JSON.stringify(contact))
          model.resource_contact.create(contact).then(resourceContact => {
            console.log('=====resourceContact: ',JSON.stringify(resourceContact));
            resolve(resourceContact)
          })
            .catch(error => {
              console.log(error)
              reject('Not Created ')

            })
        }

      })
    })


  }
}
