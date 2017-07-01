import assosiateDAO from '../dao/assosiate-dao';

export default class assosiateController {
  static getAll(req, res) {
    assosiateDAO
      .getAll()
      .then(assosiates => res.status(200).json(assosiates))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _assosiate = req.body;
    console.log("assosi",_assosiate);
    assosiateDAO
      .createNew(_assosiate)
      .then(assosiate => res.status(201).json(assosiate))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    assosiateDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
  static getById(req,res){
    let _id = req.params.id;
    assosiateDAO
      .getById(_id)
      .then((result)=>res.status(200).json(result))
      .catch(error => res.status(400).json(error))
  }
}
