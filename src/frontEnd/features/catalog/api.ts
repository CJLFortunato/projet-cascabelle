import CatalogControllers from 'backEnd/controllers/catalog.controller';
import { CatalogSearchParams, DocumentRedux } from 'common/typeDefs/catalog';

export default class ApiCatalog {
  static async fetchCatalog(formData: any) {
    console.log(formData);
    return '';
  }

  static async searchCatalog(searchParams: CatalogSearchParams): Promise<DocumentRedux[]> {
    const res = await CatalogControllers.searchCatalogController(searchParams);
    return res;
  }
}
