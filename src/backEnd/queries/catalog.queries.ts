import { sql } from '@vercel/postgres';

import { CatalogSearchParams, DocumentRedux } from 'common/typeDefs/catalog';

export default class CatalogQueries {
  static async searchCatalogQuery(searchParams: CatalogSearchParams): Promise<DocumentRedux[]> {
    const { type, title } = searchParams;
    const titleQuery: string = `'%${title}%'`;
    console.log(title, titleQuery);
    console.log(`
    SELECT
      pk_id_document AS id,
      title,
      author,
      performer,
      director,
      publisher,
      publishing_date,
      cover,
      type.label AS type
    FROM document
    JOIN type
    ON document.fk_id_type = type.pk_id_type
    WHERE title ILIKE '${`%${title}%`}' AND fk_id_type = ${type};
  `);
    const res = await sql<any>`
      SELECT
        pk_id_document AS id,
        title,
        author,
        performer,
        director,
        publisher,
        publishing_date,
        cover,
        type.label AS type
      FROM document
      JOIN type
      ON document.fk_id_type = type.pk_id_type
      WHERE title ILIKE '${`%${title}%`}' AND fk_id_type = ${type};
    `;
    console.log(res.rows);
    return res.rows;
  }
}
