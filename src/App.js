import React from "react";
import "@fortawesome/fontawesome-free/js/all";
import "bulma/css/bulma.css";
import "./App.css";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";
import { BookList } from "./components/BookList";
import { getBooks } from "./api/apiProvider";

function App() {
    const cart = [];
    const books = getBooks();
    const isFetching = false;
    const hasError = false;

    const handleAddBookToCart = book => {};
    return (
        <Layout aside={<Cart />}>
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <p className="title">Available books</p>
                    {isFetching && (
                        <progress
                            className="progress is-large is-primary"
                            max="100"
                        >
                            15%
                        </progress>
                    )}
                    {hasError && (
                        <p className="has-text-danger">
                            Problem with connection to the API appeared
                        </p>
                    )}
                    <BookList
                        items={books}
                        onAddItemToCart={handleAddBookToCart}
                        itemsInCart={cart}
                        isFetching={isFetching}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default App;
