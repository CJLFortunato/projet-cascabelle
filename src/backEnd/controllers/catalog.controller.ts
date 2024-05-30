import CatalogQueries from 'backEnd/queries/catalog.queries';
import CatalogSearchParams from 'common/typeDefs/catalog';

export default class CatalogControllers {
  static async searchCatalogController(searchParams: CatalogSearchParams) {
    const res = await CatalogQueries.searchCatalogQuery(searchParams);
    return res;
  }
}
