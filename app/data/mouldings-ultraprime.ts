import { Product } from './types';

// ULTRAPRIME (UP) MDF MOULDINGS - PRIMED
// Each profile is ONE product with multiple size variants
// Image folder: /images/products/mouldings/ultraprime-mdf/

export const ultraprimeProducts: Product[] = [
  // BEVEL PROFILE
  {
    id: 'up-bevel',
    name: 'Ultraprime Bevel',
    slug: 'ultraprime-bevel',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF bevel profile. Clean angled edge design for modern interiors. Available in multiple sizes for skirting and architrave applications.',
    features: ['Primed', 'MDF', 'Bevel Profile', '5.4m Lengths'],
    variants: [
      { size: '140x18mm', code: 'BE14018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'BE9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'BE6718', lengths: ['5.4m'] },
      { size: '42x18mm', code: 'BE4218', lengths: ['5.4m'] },
      { size: '92x15mm', code: 'BE9215', lengths: ['5.4m'] },
      { size: '67x15mm', code: 'BE6715', lengths: ['5.4m'] },
      { size: '42x15mm', code: 'BE4215', lengths: ['5.4m'] },
      { size: '92x12mm', code: 'BE9212', lengths: ['5.4m'] },
      { size: '67x12mm', code: 'BE6712', lengths: ['5.4m'] },
      { size: '42x12mm', code: 'BE4212', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-bevel.jpg',
    badge: 'Popular',
  },

  // BULLNOSE PROFILE
  {
    id: 'up-bullnose',
    name: 'Ultraprime Bullnose',
    slug: 'ultraprime-bullnose',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF bullnose profile. Rounded edge for a soft, classic look. Ideal for skirting and architrave.',
    features: ['Primed', 'MDF', 'Bullnose Profile', '5.4m Lengths'],
    variants: [
      { size: '180x18mm', code: 'BN18018', lengths: ['5.4m'] },
      { size: '140x18mm', code: 'BN14018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'BN9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'BN6718', lengths: ['5.4m'] },
      { size: '42x18mm', code: 'BN4218', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-bullnose.jpg',
  },

  // COLONIAL PROFILE
  {
    id: 'up-colonial',
    name: 'Ultraprime Colonial',
    slug: 'ultraprime-colonial',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF colonial profile. Traditional decorative profile for heritage and classic interiors.',
    features: ['Primed', 'MDF', 'Colonial Profile', '5.4m Lengths'],
    variants: [
      { size: '140x18mm', code: 'UPCO14018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'UPCO9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'UPCO6718', lengths: ['5.4m'] },
      { size: '67x12mm', code: 'UPCO6712', lengths: ['5.4m'] },
      { size: '42x12mm', code: 'UPCO4212', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-colonial.jpg',
  },

  // DOOR JAMB
  {
    id: 'up-door-jamb',
    name: 'Ultraprime Door Jamb Set',
    slug: 'ultraprime-door-jamb',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF door jamb sets. Complete set includes head and two jambs for single or double doors.',
    features: ['Primed', 'MDF', 'Complete Set'],
    variants: [
      { size: 'Single 112mm (2040)', code: 'DJ112' },
      { size: 'Single 122mm (2040)', code: 'DJ122' },
      { size: 'Single 122mm (2340)', code: 'DJJ122340' },
      { size: 'Double 112mm (2040)', code: 'DDJJ12' },
    ],
    soldBy: 'set',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-door-jamb.jpg',
  },

  // DRESSED PROFILE
  {
    id: 'up-dressed',
    name: 'Ultraprime Dressed',
    slug: 'ultraprime-dressed',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF dressed/square edge profile. Clean flat profile for contemporary interiors.',
    features: ['Primed', 'MDF', 'Square Edge', '5.4m Lengths'],
    variants: [
      { size: '180x18mm', code: 'DR18018', lengths: ['5.4m'] },
      { size: '140x18mm', code: 'DR14018', lengths: ['5.4m'] },
      { size: '120x18mm', code: 'DR12018', lengths: ['5.4m'] },
      { size: '110x18mm', code: 'DR11018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'DR9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'DR6718', lengths: ['5.4m'] },
      { size: '42x18mm', code: 'DR4218', lengths: ['5.4m'] },
      { size: '135x12mm', code: 'DR13512', lengths: ['5.4m'] },
      { size: '110x12mm', code: 'DR11012', lengths: ['5.4m'] },
      { size: '92x12mm', code: 'DR9212', lengths: ['5.4m'] },
      { size: '67x12mm', code: 'DR6712', lengths: ['5.4m'] },
      { size: '42x12mm', code: 'DR4212', lengths: ['5.4m'] },
      { size: '30x12mm', code: 'DR3012', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-dressed.jpg',
  },

  // HALF SPLAYED PROFILE
  {
    id: 'up-half-splayed',
    name: 'Ultraprime Half Splayed',
    slug: 'ultraprime-half-splayed',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF half splayed profile. Angled top edge for a modern look.',
    features: ['Primed', 'MDF', 'Half Splayed Profile', '5.4m Lengths'],
    variants: [
      { size: '140x18mm', code: 'HS14018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'HS9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'HS6718', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-half-splayed.jpg',
  },

  // KINGSTON PROFILE
  {
    id: 'up-kingston',
    name: 'Ultraprime Kingston',
    slug: 'ultraprime-kingston',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF Kingston profile. Distinctive stepped design.',
    features: ['Primed', 'MDF', 'Kingston Profile', '5.4m Lengths'],
    variants: [
      { size: '85x18mm', code: 'KI8518', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'KI6718', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-kingston.jpg',
  },

  // LAMBS TONGUE PROFILE
  {
    id: 'up-lambs-tongue',
    name: 'Ultraprime Lambs Tongue',
    slug: 'ultraprime-lambs-tongue',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF lambs tongue profile. Classic curved profile for traditional interiors.',
    features: ['Primed', 'MDF', 'Lambs Tongue Profile', '5.4m Lengths'],
    variants: [
      { size: '180x18mm', code: 'LT18018', lengths: ['5.4m'] },
      { size: '140x18mm', code: 'LT14018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'LT9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'LT6718', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-lambs-tongue.jpg',
  },

  // PENCIL ROUND PROFILE
  {
    id: 'up-pencil-round',
    name: 'Ultraprime Pencil Round',
    slug: 'ultraprime-pencil-round',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF pencil round profile. Subtle rounded edge detail.',
    features: ['Primed', 'MDF', 'Pencil Round Profile', '5.4m Lengths'],
    variants: [
      { size: '92x18mm', code: 'PR9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'PR6718', lengths: ['5.4m'] },
      { size: '42x18mm', code: 'PR4218', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-pencil-round.jpg',
  },

  // REPLICA PROFILE
  {
    id: 'up-replica',
    name: 'Ultraprime Replica',
    slug: 'ultraprime-replica',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF replica profile. Decorative stepped design.',
    features: ['Primed', 'MDF', 'Replica Profile', '5.4m Lengths'],
    variants: [
      { size: '180x18mm', code: 'RE18018', lengths: ['5.4m'] },
      { size: '135x18mm', code: 'RE13518', lengths: ['5.4m'] },
      { size: '85x18mm', code: 'RE8518', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'RE6718', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-replica.jpg',
  },

  // STEPPED DECO PROFILE
  {
    id: 'up-stepped-deco',
    name: 'Ultraprime Stepped Deco',
    slug: 'ultraprime-stepped-deco',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF stepped deco profile. Art deco inspired stepped design.',
    features: ['Primed', 'MDF', 'Stepped Deco Profile', '5.4m Lengths'],
    variants: [
      { size: '135x18mm', code: 'SD13518', lengths: ['5.4m'] },
      { size: '85x18mm', code: 'SD8518', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'SD6718', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-stepped-deco.jpg',
  },

  // TRADITIONAL VICTORIAN PROFILE
  {
    id: 'up-trad-victorian',
    name: 'Ultraprime Traditional Victorian',
    slug: 'ultraprime-traditional-victorian',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Ultraprime MDF',
    description: 'Primed MDF traditional Victorian profile. Ornate period design for heritage homes.',
    features: ['Primed', 'MDF', 'Traditional Victorian Profile', '5.4m Lengths'],
    variants: [
      { size: '140x18mm', code: 'TV14018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'TV9218', lengths: ['5.4m'] },
      { size: '67x18mm', code: 'TV6718', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/ultraprime-mdf/',
    imageFilename: 'up-trad-victorian.jpg',
  },
];
