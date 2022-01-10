import { ResultPaged } from './result-paged'
import { BaseEntity } from './base-entity'
import { Filter } from '../filter'
import { Sort } from './sort'
import { SelectField } from './select-field'

export interface Repository<U, T extends BaseEntity<U>> {
  fieldId(): string

  fieldVersion(): string

  fieldCreatedAt(): string

  fieldUpdatedAt(): string

  fieldActive(): string

  find(
    filter?: Filter,
    populate?: string | string[],
    sort?: Sort | Sort[],
    select?: SelectField,
    limit?: number,
    includeAll?: boolean
  ): Promise<T[]>

  findOne(
    filter?: Filter,
    populate?: string | string[],
    sort?: Sort | Sort[],
    select?: SelectField,
    includeAll?: boolean
  ): Promise<T>

  findById(
    id: U,
    populate?: string | string[],
    select?: SelectField,
    includeAll?: boolean
  ): Promise<T>

  paged(
    first?: number,
    pageSize?: number,
    filter?: Filter,
    populate?: string | string[],
    sort?: Sort | Sort[],
    select?: SelectField,
    includeAll?: boolean
  ): Promise<ResultPaged<T>>

  insert(doc: Partial<T>, populate?: string | string[]): Promise<T>

  insertMany(docs: Partial<T>[], populate?: string | string[]): Promise<T[]>

  update(
    id: U,
    doc: Partial<T>,
    populate?: string | string[],
    includeAll?: boolean
  ): Promise<T>

  updateMany(
    filter: Filter,
    doc: Partial<T>,
    populate?: string | string[],
    includeAll?: boolean
  ): Promise<T[]>

  delete(id: U, includeAll?: boolean): Promise<void>

  deleteMany(filter?: Filter, includeAll?: boolean): Promise<void>

  exists(filter?: Filter, includeAll?: boolean): Promise<boolean>

  upsert(
    doc: Partial<T>,
    filter?: Filter,
    populate?: string | string[],
    includeAll?: boolean
  ): Promise<T>

  count(filter?: Filter, includeAll?: boolean): Promise<number>

  logicDelete(id: U): Promise<T>

  logicActive(id: U): Promise<T>
}
