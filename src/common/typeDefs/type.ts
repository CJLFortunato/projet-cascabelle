export type Type = {
  id: number,
  label: string,
};

export type TypeInDB = {
  pk_id_type: number,
  label: string,
};

export type TypeCreate = {
  label: string,
}
