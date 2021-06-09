import React from "react";
import { EmptyCart } from "./EmptyCart";
import { CartItemsList } from "./CartItemsList";
import { priceFormatter } from "../../helpers";
import { BookListType } from "../../types";

const calculateDiscount = items => {
    return 0;
};

export const Cart = ({ items }) => {
    const fakeData = items;
    const subTotal = fakeData
        .reduce((sum, item) => sum + item.price, 0)
        .toFixed(2);
    const discout = calculateDiscount(fakeData);
    const total = (subTotal - discout).toFixed(2);
    return (
        <div className="tile is-parent">
            <div className="tile is-child box">
                <h4 className="title is-4">Your cart</h4>
                <hr />
                {fakeData.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <CartItemsList items={fakeData} onRemoveItem={() => console.log('To implemented')} />
                )}
                <div className="columns">
                    <div className="column">Subtotal:</div>
                    <div className="column has-text-right is-size-6">
                        {priceFormatter(subTotal)}
                    </div>
                </div>
                <div className="columns">
                    <div className="column">Discount:</div>
                    <div className="column has-text-right is-size-6">
                        {priceFormatter(discout)}
                    </div>
                </div>
                <div className="columns">
                    <div className="column">Total:</div>
                    <div className="column  has-text-right is-size-4">
                        <strong>{priceFormatter(total)}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    items: BookListType.isRequired,
};
