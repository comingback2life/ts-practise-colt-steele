interface ProductFarmStand {
	price: number;
	name: string;
	quantity: number;
}
const printProductSummary = (product: ProductFarmStand): void => {
	console.log(`${product.name} $${product.price}`);
};

printProductSummary({ price: 30, name: 'Silk', quantity: 22 });
