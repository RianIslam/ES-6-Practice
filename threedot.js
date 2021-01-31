const ages = [12,23,45,67,9,];
const ages2 = [12,45,67,89,8];
const ages3 = [12,45,67,89,8];
const allAges = ages.concat(ages2);

const allAges2= [...ages, ...ages2, ...ages3];
console.log(allAges2);