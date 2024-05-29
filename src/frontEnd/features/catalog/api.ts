export default class ApiCatalog {
  static async fetchCatalog(formData: any) {
    console.log(formData);
    return '';
  }

  static async searchCatalog(params: any) {
    console.log(params);
    return ['test'];
  }
}
