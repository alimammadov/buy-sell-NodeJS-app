# Buy-Sell App
Products can be added to and removed from the application by a seller. A seller can view all available products on the application. The following are methods that apply to both sellers and buyers:

# Installation
You can either issue a request to download the repository or choose to get the files in.zip format. Please click on the following link to obtain the dependencies required to execute the application.

```node
npm install
```


## Usage
A seller can add a product to the database by specifying its name, image and price. By default, the aformentioned product components (name, image and price)  are present. A seller may choose to include different sort of information regarding the product. There is validation in the Default parameters. Empty or clone products are refused by the application in order to prevent system abuse

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
