const checkout = {

    items: [],
    
    total: 0,
    
    addItem(item) {
    
    if (typeof item.price !== "number" || item.price === NaN || item.price <= 0) {
    
    console.log("Invalid price.");
    
    return;
    
    }
    
    this.items.push(item);
    
    this.total += item.price;
    
    },
    
    getTotal() {
    
    return parseFloat(this.total).toFixed(2);  
} };
    
    checkout.addItem({ name: "Coffee Maker", price: 50.00 });
    checkout.addItem({ name: "Bread", price: 1.50 });
    
    checkout.addItem({ name: "Milk", price: 2.50 });
    
    console.log(checkout.getTotal()); // Expected issue !