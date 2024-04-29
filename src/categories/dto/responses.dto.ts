import { Category } from '../entities';

export class GetCategoryResponse extends Category {}

export class GetCategoriesListResponse {
  list: GetCategoryResponse[];
}
