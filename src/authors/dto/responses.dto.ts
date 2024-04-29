import { Author } from '../entities';

export class GetAuthorResponse extends Author {}

export class GetAuthorsListResponse {
  list: GetAuthorResponse[];
}
