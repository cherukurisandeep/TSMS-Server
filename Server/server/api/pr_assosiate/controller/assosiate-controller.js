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
  static create(req,res){
    console.log("console")
    let _reqbody= req.body
    assosiateDAO
      .create(_reqbody)
      .then((result)=>res.json(result))
      .catch(error=>res.status(400))
  }
  static getByIdResource(req,res){
    let _id = req.params.id
    assosiateDAO
      .getByIdResource(_id)
      .then((result)=>res.json(result))
      .catch(error=>res.status(400))
  }
  static deleteByIds(req,res){
    let r_id = req.params.r_id
    let p_id = req.params.p_id
    assosiateDAO
      .deleteByIds(r_id,p_id)
      .then((result)=>res.json())
      .catch(error => res.status(400))
  }
}
