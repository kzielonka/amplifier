import { DataStore } from "@aws-amplify/datastore";
import Amplify from 'aws-amplify';
import { Book } from "../models/index";
import aws_exports from './aws-exports';

export const getBooks = async () => {
    try {
        await Amplify.configure(aws_exports);

        const books = await DataStore.query(Book);
        console.log("Posts retrieved successfully!", JSON.stringify(books, null, 2));
        return books;
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
}

