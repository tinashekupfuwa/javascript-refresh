//Function Default Parameters

const getBrand = (brand = "none") => {
	//(brand = "none" is a parameter with a default value of 'none')
	return {
		brand: brand,
		website: `www.${brand.toLowerCase()}.com`
	};
};

console.log(JSON.stringify(getBrand(), null, 1));
