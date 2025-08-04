import { Group} from "three";
import { MTLLoader } from '../libs/MTLLoader.js'
import { OBJLoader } from '../libs/OBJLoader.js'


export const createCube = () => {
  var mtld = new MTLLoader();
    var objld = new OBJLoader();
    var group = new Group();
    mtld.load("./911.mtl", 
      (materials) => {
        objld.setMaterials(materials);
        objld.load("./Porsche_911_GT2.obj",
          (object) => {
            group.add(object);
          }, null, null
        );
      }
    );
    return group;
};
