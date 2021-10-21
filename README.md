# Buy-Sell App
Products can be added to and removed from the application by a seller. A seller can view all available products on the application. The following are methods that apply to both sellers and buyers:

# Installation
You can either issue a request to download the repository or choose to get the files in.zip format. Please click on the following link to obtain the dependencies required to execute the application.

```node
npm install
```
____________
## Usage
A seller can add a product to the database by specifying its title, description and price. By default, the aformentioned product components (title, description and price)  are present. A seller may choose to include different sort of information regarding the product. There is validation in the Default parameters. Empty or clone products are refused by the application in order to prevent system abuse

## Seller Methods:

##### - Add a product 
```bash
node app.js add --title='Product title' --description="Product description" --price= 2 
```
##### - Remove a product
```bash
node app.js add --title='Product title'  
```
____________

## Buyer Methods:
- A buyer has the ability to view all products availabe on the application.
##### - Show all products
```
node app.js show
```

## License
