import CatalogQueries from 'backEnd/queries/catalog.queries';
import { CatalogSearchParams, DocumentRedux } from 'common/typeDefs/catalog';

export default class CatalogControllers {
  static async searchCatalogController(
    searchParams: CatalogSearchParams,
  ): Promise<DocumentRedux[]> {
    const res = await CatalogQueries.searchCatalogQuery(searchParams);
    return res;
  }
}
