import CatalogSearchParams from 'common/typeDefs/catalog';

export default class CatalogQueries {
  static async searchCatalogQuery(searchParams: CatalogSearchParams) {
    const { type, title, author } = searchParams;
    return [type, title, author];
  }
}
