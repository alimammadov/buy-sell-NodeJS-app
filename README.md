# Buy-Sell App


# Installation
Repository ni request gondere bilerek yukleye biler ve ya fayllari .zip fayli kimi dowload ede bilersiz. App istifade etdiyi butun dependecileri yuklemek ucun:

```node
npm install
```


## Usage

Seller can to add product name, description and price to database. Also can to remove a product. 
App has validation can`t add empty string or duplicate product. App allowed add or modify product another properties.

## Methods for Sellers 
##### Add a product 

```bash
node app.js add --title='Product title' --description="Product description" --price= 2 
```
##### Remove a product
```bash
node app.js add --title='Product title'  
```
____________

## Methods For Buyer's
Buyer`s has only one method can see all products.
##### Show all products
```
node app.js show
```

## License
