import TypeQueries from 'backEnd/queries/type.queries';
import { Type } from 'common/typeDefs/type';

export default class TypeControllers {
  static async fetchTypesController() {
    const res = await TypeQueries.fetchTypes();
    // console.log('controller');
    // console.log(types);
    const types: Type[] = res.map((el) => ({
      id: el.pk_id_type,
      label: el.label,
    }));
    return types;
  }
}
