class ProductManager {
    static id = 0;

    constructor (){
        this.products = [];
    }

    addProducts (nombre, descripcion, precio, thumbnail, code, stock){
        if (!nombre || !descripcion || !precio || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios.");
        return;
        }   
    
        if (this.products.some(producto => producto.code === code)) {
        console.log ("codigo del producto repetido.");
        return;
        }

        const newProduct = {
            id: ++ProductManager.id,
            nombre,
            descripcion,
            precio,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct);
        console.log("el producto fue agregado de forma correcta: ", newProduct);
    } 

    getProducts() {
        return this.products;
    }
    
    getProductById(id) {
        const producto = this.products.find(product => product.id === id);
        if (!producto) {
        return "Not Found";
        } 
        return producto
        }
    }
    
//------------------------TESTEO----------------------------

const manager = new ProductManager();

console.log(manager.getProducts)

manager.addProducts("mate", "ideal para cebar buenos mates", 200, "mate.jpg", "mate2024", 5);

manager.addProducts("termo", "conserva el agua caliente mucho tiempo", 300, "termo.jpg", "termo2024", 5);

manager.addProducts("yerba", "ideal para cebar buenos mates", 400, "yerba.jpg", "yerba2024", 5);

console.log(manager.getProducts)

console.log("Buscamos producto por id:");
console.log(manager.getProductById(1));