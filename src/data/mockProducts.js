// Demo dataset shaped exactly like the Google Sheet columns:
// id, name, category, brand, price, image, description, featured, popular, stock, displayOrder
// Swap PRODUCTS_SHEET_CSV_URL in constants/config.js to replace this with live data.

const img = (seed) => `https://picsum.photos/seed/${seed}/600/600`;

export const MOCK_PRODUCTS = [
  { id: '1', name: 'Sona Masoori Rice', weight: '5 kg', category: 'staples', brand: 'AADITRI Select', price: 320, image: img('rice-bag'), description: 'Aged, aromatic everyday rice.', featured: true, popular: true, stock: true, displayOrder: 1 },
  { id: '2', name: 'Toor Dal', weight: '1 kg', category: 'staples', brand: 'Farm Fresh', price: 165, image: img('toor-dal'), description: 'Unpolished, protein-rich toor dal.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '3', name: 'Groundnut Oil', weight: '1 L', category: 'staples', brand: 'Gold Drop', price: 210, image: img('groundnut-oil'), description: 'Cold-pressed groundnut cooking oil.', featured: true, popular: false, stock: true, displayOrder: 3 },
  { id: '4', name: 'Wheat Atta', weight: '5 kg', category: 'staples', brand: 'AADITRI Select', price: 240, image: img('wheat-atta'), description: 'Stone-ground whole wheat flour.', featured: false, popular: true, stock: true, displayOrder: 4 },
  { id: '5', name: 'Idli Rava', weight: '1 kg', category: 'staples', brand: 'Sri Lakshmi', price: 60, image: img('idli-rava'), description: 'Soft-idli special rava.', featured: false, popular: false, stock: true, displayOrder: 5 },

  { id: '6', name: 'Tomato', weight: '1 kg', category: 'vegetables', brand: 'Local Farm', price: 30, image: img('tomato'), description: 'Farm-fresh red tomatoes.', featured: false, popular: true, stock: true, displayOrder: 1 },
  { id: '7', name: 'Onion', weight: '1 kg', category: 'vegetables', brand: 'Local Farm', price: 35, image: img('onion'), description: 'Everyday cooking onions.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '8', name: 'Potato', weight: '1 kg', category: 'vegetables', brand: 'Local Farm', price: 28, image: img('potato'), description: 'Fresh, farm-picked potatoes.', featured: false, popular: true, stock: true, displayOrder: 3 },
  { id: '9', name: 'Green Chilli', weight: '250 g', category: 'vegetables', brand: 'Local Farm', price: 15, image: img('green-chilli'), description: 'Spicy fresh green chillies.', featured: false, popular: false, stock: true, displayOrder: 4 },
  { id: '10', name: 'Brinjal', weight: '500 g', category: 'vegetables', brand: 'Local Farm', price: 22, image: img('brinjal'), description: 'Tender purple brinjals.', featured: false, popular: false, stock: false, displayOrder: 5 },
  { id: '11', name: 'Ladies Finger', weight: '500 g', category: 'vegetables', brand: 'Local Farm', price: 25, image: img('okra'), description: 'Fresh tender okra.', featured: false, popular: false, stock: true, displayOrder: 6 },

  { id: '12', name: 'Banana', weight: '1 dozen', category: 'fruits', brand: 'Local Farm', price: 55, image: img('banana'), description: 'Naturally ripened bananas.', featured: true, popular: true, stock: true, displayOrder: 1 },
  { id: '13', name: 'Apple', weight: '1 kg', category: 'fruits', brand: 'Kashmir Fresh', price: 180, image: img('apple'), description: 'Crisp, juicy apples.', featured: true, popular: false, stock: true, displayOrder: 2 },
  { id: '14', name: 'Papaya', weight: '1 pc', category: 'fruits', brand: 'Local Farm', price: 40, image: img('papaya'), description: 'Ripe, sweet papaya.', featured: false, popular: false, stock: true, displayOrder: 3 },
  { id: '15', name: 'Pomegranate', weight: '1 kg', category: 'fruits', brand: 'Local Farm', price: 150, image: img('pomegranate'), description: 'Juicy, seed-rich pomegranates.', featured: false, popular: false, stock: true, displayOrder: 4 },

  { id: '16', name: 'Toned Milk', weight: '500 ml', category: 'dairy', brand: 'Heritage', price: 28, image: img('milk-packet'), description: 'Fresh toned milk, daily delivery.', featured: true, popular: true, stock: true, displayOrder: 1 },
  { id: '17', name: 'Curd', weight: '400 g', category: 'dairy', brand: 'Heritage', price: 35, image: img('curd-cup'), description: 'Thick, fresh set curd.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '18', name: 'Paneer', weight: '200 g', category: 'dairy', brand: 'Heritage', price: 80, image: img('paneer'), description: 'Soft, fresh paneer block.', featured: false, popular: false, stock: true, displayOrder: 3 },
  { id: '19', name: 'Butter', weight: '100 g', category: 'dairy', brand: 'Amul', price: 55, image: img('butter'), description: 'Creamy table butter.', featured: false, popular: false, stock: true, displayOrder: 4 },

  { id: '20', name: 'Banana Chips', weight: '200 g', category: 'snacks', brand: 'AADITRI Select', price: 60, image: img('banana-chips'), description: 'Crispy, lightly salted chips.', featured: true, popular: true, stock: true, displayOrder: 1 },
  { id: '21', name: 'Mixture', weight: '200 g', category: 'snacks', brand: 'Sri Lakshmi', price: 50, image: img('mixture-snack'), description: 'Classic South Indian mixture.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '22', name: 'Biscuits', weight: '200 g', category: 'snacks', brand: 'Parle', price: 30, image: img('biscuits'), description: 'Crunchy tea-time biscuits.', featured: false, popular: false, stock: true, displayOrder: 3 },

  { id: '23', name: 'Filter Coffee Powder', weight: '200 g', category: 'beverages', brand: 'AADITRI Select', price: 120, image: img('coffee-powder'), description: 'Strong, aromatic filter coffee.', featured: true, popular: true, stock: true, displayOrder: 1 },
  { id: '24', name: 'Tea Powder', weight: '250 g', category: 'beverages', brand: 'Red Label', price: 95, image: img('tea-powder'), description: 'Rich, everyday tea powder.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '25', name: 'Fruit Juice', weight: '1 L', category: 'beverages', brand: 'Real', price: 110, image: img('fruit-juice'), description: 'Mixed fruit juice carton.', featured: false, popular: false, stock: true, displayOrder: 3 },

  { id: '26', name: 'Toothpaste', weight: '200 g', category: 'personal-care', brand: 'Colgate', price: 95, image: img('toothpaste'), description: 'Cavity protection toothpaste.', featured: false, popular: false, stock: true, displayOrder: 1 },
  { id: '27', name: 'Bathing Soap', weight: '125 g', category: 'personal-care', brand: 'Santoor', price: 40, image: img('soap-bar'), description: 'Gentle, moisturising soap bar.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '28', name: 'Shampoo', weight: '180 ml', category: 'personal-care', brand: 'Clinic Plus', price: 130, image: img('shampoo-bottle'), description: 'Strengthening daily shampoo.', featured: false, popular: false, stock: true, displayOrder: 3 },

  { id: '29', name: 'Dishwash Bar', weight: '1 pc', category: 'household', brand: 'Vim', price: 20, image: img('dishwash-bar'), description: 'Grease-cutting dishwash bar.', featured: false, popular: false, stock: true, displayOrder: 1 },
  { id: '30', name: 'Detergent Powder', weight: '1 kg', category: 'household', brand: 'Surf Excel', price: 145, image: img('detergent-powder'), description: 'Deep-clean detergent powder.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '31', name: 'Floor Cleaner', weight: '1 L', category: 'household', brand: 'Lizol', price: 175, image: img('floor-cleaner'), description: 'Disinfectant floor cleaner.', featured: false, popular: false, stock: true, displayOrder: 3 },

  { id: '32', name: 'Turmeric Powder', weight: '200 g', category: 'masalas', brand: 'AADITRI Select', price: 45, image: img('turmeric-powder'), description: 'Pure, farm-sourced turmeric.', featured: true, popular: true, stock: true, displayOrder: 1 },
  { id: '33', name: 'Red Chilli Powder', weight: '200 g', category: 'masalas', brand: 'AADITRI Select', price: 70, image: img('chilli-powder'), description: 'Fiery, deep-red chilli powder.', featured: false, popular: true, stock: true, displayOrder: 2 },
  { id: '34', name: 'Sambar Powder', weight: '200 g', category: 'masalas', brand: 'Sri Lakshmi', price: 65, image: img('sambar-powder'), description: 'Authentic South Indian sambar masala.', featured: false, popular: false, stock: true, displayOrder: 3 },

  { id: '35', name: 'Bread', weight: '400 g', category: 'bakery', brand: 'Modern', price: 45, image: img('bread-loaf'), description: 'Soft, fresh white bread.', featured: false, popular: true, stock: true, displayOrder: 1 },
  { id: '36', name: 'Rusk', weight: '200 g', category: 'bakery', brand: 'Britannia', price: 40, image: img('rusk'), description: 'Crisp, lightly sweet rusk.', featured: false, popular: false, stock: true, displayOrder: 2 },

  { id: '37', name: 'Frozen Peas', weight: '500 g', category: 'frozen', brand: 'Safal', price: 65, image: img('frozen-peas'), description: 'Farm-frozen green peas.', featured: false, popular: false, stock: true, displayOrder: 1 },
  { id: '38', name: 'Ice Cream Tub', weight: '700 ml', category: 'frozen', brand: 'Amul', price: 180, image: img('ice-cream-tub'), description: 'Creamy vanilla ice cream.', featured: true, popular: false, stock: true, displayOrder: 2 },

  { id: '39', name: 'Baby Diapers', weight: 'M, 20 pcs', category: 'baby-care', brand: 'Pampers', price: 350, image: img('baby-diapers'), description: 'Soft, leak-proof diapers.', featured: false, popular: false, stock: true, displayOrder: 1 },
  { id: '40', name: 'Baby Powder', weight: '200 g', category: 'baby-care', brand: 'Johnson\'s', price: 150, image: img('baby-powder'), description: 'Gentle baby talcum powder.', featured: false, popular: false, stock: true, displayOrder: 2 },

  { id: '41', name: 'Camphor', weight: '50 g', category: 'pooja', brand: 'AADITRI Select', price: 30, image: img('camphor'), description: 'Pure pooja camphor tablets.', featured: false, popular: false, stock: true, displayOrder: 1 },
  { id: '42', name: 'Agarbatti', weight: '20 sticks', category: 'pooja', brand: 'Cycle', price: 35, image: img('agarbatti'), description: 'Fragrant incense sticks.', featured: false, popular: true, stock: true, displayOrder: 2 },
];
