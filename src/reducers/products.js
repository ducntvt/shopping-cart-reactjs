var initialState = [
	{
		id: 1,
		name: "Iphone 7 Plus",
		image: "https://media.cdnws.com/_i/30871/4622/2042/23/iphone-7-noir-mat-reconditionne.jpeg",
		description: "sản phẩm pro",
		price: 500,
		inventory: 10,
		rating: 4
	},
	{
		id: 2,
		name: "Iphone 8 Plus",
		image: "https://media.cdnws.com/_i/30871/4622/2042/23/iphone-7-noir-mat-reconditionne.jpeg",
		description: "sản phẩm pro",
		price: 500,
		inventory: 10,
		rating: 3
	},
	{
		id: 3,
		name: "Iphone 9 Plus",
		image: "https://media.cdnws.com/_i/30871/4622/2042/23/iphone-7-noir-mat-reconditionne.jpeg",
		description: "sản phẩm pro",
		price: 500,
		inventory: 10,
		rating: 2
	}
];


const products = (state= initialState, action) => {
	switch(action.type){
		default:
			return [...state];
	}
}

export default products;

