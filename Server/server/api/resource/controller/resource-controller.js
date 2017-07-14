import resourceDAO from '../dao/resource-dao';

export default class resourceController {
  static getAll(req, res) {
    resourceDAO
      .getAll()
      .then(resources => res.status(200).json(resources))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _resource = req.body;

    resourceDAO
      .createNew(_resource)
      .then(resource => res.status(201).json(resource))
      .catch(error => res.status(400).json(error));
  }
  static getById(req, res) {
    let _id = req.params.id;
    resourceDAO
      .getById(_id)
      .then(resources => res.status(200).json(resources))
      .catch(error => res.status(400).json(error));
  }


  static removeById(req, res) {
    let _id = req.params.id;

    resourceDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
  static update(req,res){
    let _resource = req.body;
    let _id = _resource.id
    resourceDAO.update(_id,_resource)
      .then((resource)=> res.status(200).json(resource))
      .catch((error=>res.status(400).json(error)))
  }
  static getLogin(req,res){

    let id = req.params.id
    let password = req.params.password
    resourceDAO.getLogin(id,password)
      .then((resource)=>res.json(resource))
      .catch((error=>res.status(400).json(error)))
  }
}
