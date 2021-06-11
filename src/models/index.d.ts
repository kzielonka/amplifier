import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Book {
  readonly id: string;
  readonly title?: string;
  readonly isbn?: string;
  readonly pageCount?: number;
  readonly publishDate?: string;
  readonly thumbnailUrl?: string;
  readonly shortDescription?: string;
  readonly longDescription?: string;
  readonly status?: string;
  readonly authors: (string | null)[];
  readonly categories: (string | null)[];
  readonly price?: number;
  readonly quantity?: number;
  readonly specialOffer?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}