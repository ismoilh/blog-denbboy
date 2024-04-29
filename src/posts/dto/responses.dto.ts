import { Post } from '../entities';

export class GetPostResponse extends Post {}

export class GetPostsListResponse {
  list: GetPostResponse[];
}
