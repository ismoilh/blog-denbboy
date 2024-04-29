import { Tag } from '../entities';

export class GetTagResponse extends Tag {}

export class GetTagsListResponse {
  list: GetTagResponse[];
}
