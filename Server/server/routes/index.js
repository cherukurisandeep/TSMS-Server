import TodoRoutes from "../api/todo/route/todo-route";
import resourceRoutes from '../api/resource/route/resource-route';
import resource_contactRoutes from '../api/resource_conatct/route/resource_contact-route'
import projectRoutes from '../api/project/route/project-route'
import assosiateRoutes from '../api/pr_assosiate/route/assosiate-route'
export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     resourceRoutes.init(router);
     resource_contactRoutes.init(router);
     projectRoutes.init(router);
     assosiateRoutes.init(router);

     app.get("/tsms",(req,res)=> res.status(200).send({
       message : "Its just a get menthos"
     }));
     app.post("/tsms",(req,res)=> res.status(200).send({
       message : "Its just a post menthos"
     }));
     app.use("/", router);
   }
}
