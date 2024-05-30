import TypeControllers from 'backEnd/controllers/type.controller';

export default class ApiTypes {
  static async fetchTypes() {
    const types = await TypeControllers.fetchTypesController();
    // console.log('api');
    // console.log(types);
    return types;
  }
}
