export type CatalogSearchParams = {
  type: string,
  title: string,
  author: string
}

export type DocumentRedux = {
  id: number,
  title: string,
  author: string | null,
  performers: string | null,
  director: string | null,
  publisher: string,
  publication_date: string,
  cover: string | null,
  type: string,
}

export type Document = {
  id: number,
  title: string,
  author: string,
  performer: string | null,
  actors: string | null,
  director: string | null,
  publisher: string | null,
  publication: string | null,
  publishing_date: string,
  isxn: string | null,
  blurb: string | null,
  cover: string | null,
  country: string,
  notes: string | null,
  rating: string,
  subtitles: boolean,
  audiodescription: boolean,
  supportId: number,
  typeId: number,
}
