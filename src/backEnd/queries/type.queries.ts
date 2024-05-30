import { sql } from '@vercel/postgres';

import { TypeInDB } from 'common/typeDefs/type';

export default class TypeQueries {
  static async fetchTypes() {
    const types = await sql<TypeInDB>`
      SELECT * FROM type
    `;
    return types.rows;
  }
}
