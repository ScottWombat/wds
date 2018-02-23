i"use strict";

// Food is a base class
class ProductItem {

    constructor (id,title, description, price, discount,rating) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discount = discount;
        this.rating = rating
    }

}

export { Person as default}