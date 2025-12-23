import { Product } from './types';

// FINGER JOINTED PINE (PP) MOULDINGS - PRIMED
// Each profile is ONE product with multiple size variants
// Image folder: /images/products/mouldings/finger-jointed-pine/

export const fingerJointedPineProducts: Product[] = [
  // BEVEL PROFILE
  {
    id: 'pp-bevel',
    name: 'Pine Bevel',
    slug: 'pine-bevel',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine bevel profile. Clean angled edge for modern interiors.',
    features: ['Primed', 'Finger Jointed Pine', 'Bevel Profile', '5.4m Lengths'],
    variants: [
      { size: '138x18mm', code: 'BE13818', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'BE9218', lengths: ['5.4m'] },
      { size: '66x18mm', code: 'BE6618', lengths: ['5.4m'] },
      { size: '42x18mm', code: 'BE4218', lengths: ['5.4m'] },
      { size: '66x11mm', code: 'BE6611', lengths: ['5.4m'] },
      { size: '42x11mm', code: 'BE4211', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-bevel.jpg',
  },

  // BULLNOSE PROFILE
  {
    id: 'pp-bullnose',
    name: 'Pine Bullnose',
    slug: 'pine-bullnose',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine bullnose profile. Rounded edge for a soft, classic look.',
    features: ['Primed', 'Finger Jointed Pine', 'Bullnose Profile', '5.4m Lengths'],
    variants: [
      { size: '185x18mm', code: 'BN18518', lengths: ['5.4m'] },
      { size: '138x18mm', code: 'BN13818', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'BN9218', lengths: ['5.4m'] },
      { size: '66x18mm', code: 'BN6618', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-bullnose.jpg',
  },

  // COLONIAL PROFILE
  {
    id: 'pp-colonial',
    name: 'Pine Colonial',
    slug: 'pine-colonial',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine colonial profile. Traditional decorative design.',
    features: ['Primed', 'Finger Jointed Pine', 'Colonial Profile', '5.4m Lengths'],
    variants: [
      { size: '138x18mm', code: 'PPCO13818', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'PPCO9218', lengths: ['5.4m'] },
      { size: '66x18mm', code: 'PPCO6618', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-colonial.jpg',
  },

  // DRESSED PROFILE
  {
    id: 'pp-dressed',
    name: 'Pine Dressed',
    slug: 'pine-dressed',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine dressed/square edge profile. Clean flat profile for contemporary interiors.',
    features: ['Primed', 'Finger Jointed Pine', 'Square Edge', '5.4m Lengths'],
    variants: [
      { size: '185x18mm', code: 'DR18518', lengths: ['5.4m'] },
      { size: '138x18mm', code: 'DR13818', lengths: ['5.4m'] },
      { size: '120x18mm', code: 'DR12018', lengths: ['5.4m'] },
      { size: '110x18mm', code: 'DR11018', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'DR9218', lengths: ['5.4m'] },
      { size: '66x18mm', code: 'DR6618', lengths: ['5.4m'] },
      { size: '42x18mm', code: 'DR4218', lengths: ['5.4m'] },
      { size: '18x18mm', code: 'DR1818', lengths: ['5.4m'] },
      { size: '138x11mm', code: 'DR13811', lengths: ['5.4m'] },
      { size: '110x11mm', code: 'DR11011', lengths: ['5.4m'] },
      { size: '92x11mm', code: 'DR9211', lengths: ['5.4m'] },
      { size: '66x11mm', code: 'DR6611', lengths: ['5.4m'] },
      { size: '42x11mm', code: 'DR4211', lengths: ['5.4m'] },
      { size: '30x11mm', code: 'DR3011', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-dressed.jpg',
  },

  // DOOR JAMB
  {
    id: 'pp-door-jamb',
    name: 'Pine Door Jamb Set',
    slug: 'pine-door-jamb',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine door jamb set.',
    features: ['Primed', 'Finger Jointed Pine', 'Complete Set'],
    variants: [
      { size: '112x18mm', code: 'DJJ1218' },
    ],
    soldBy: 'set',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-door-jamb.jpg',
  },

  // HALF SPLAYED PROFILE
  {
    id: 'pp-half-splayed',
    name: 'Pine Half Splayed',
    slug: 'pine-half-splayed',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine half splayed profile. Angled top edge for a modern look.',
    features: ['Primed', 'Finger Jointed Pine', 'Half Splayed Profile', '5.4m Lengths'],
    variants: [
      { size: '138x18mm', code: 'HS13818', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'HS9218', lengths: ['5.4m'] },
      { size: '66x18mm', code: 'HS6618', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-half-splayed.jpg',
  },

  // LAMBS TONGUE PROFILE
  {
    id: 'pp-lambs-tongue',
    name: 'Pine Lambs Tongue',
    slug: 'pine-lambs-tongue',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine lambs tongue profile. Classic curved profile.',
    features: ['Primed', 'Finger Jointed Pine', 'Lambs Tongue Profile', '5.4m Lengths'],
    variants: [
      { size: '138x18mm', code: 'LT13818', lengths: ['5.4m'] },
      { size: '92x18mm', code: 'LT9218', lengths: ['5.4m'] },
      { size: '66x18mm', code: 'LT6618', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-lambs-tongue.jpg',
  },

  // OVOLO / QUAD / TRI QUAD
  {
    id: 'pp-ovolo',
    name: 'Pine Ovolo',
    slug: 'pine-ovolo',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine ovolo moulding.',
    features: ['Primed', 'Finger Jointed Pine', 'Ovolo', '5.4m Lengths'],
    variants: [
      { size: '40x40mm', code: 'OV4040', lengths: ['5.4m'] },
      { size: '30x30mm', code: 'OV3030', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-ovolo.jpg',
  },

  {
    id: 'pp-quad',
    name: 'Pine Quad',
    slug: 'pine-quad',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine quad moulding for floor/wall junctions.',
    features: ['Primed', 'Finger Jointed Pine', 'Quad', '5.4m Lengths'],
    variants: [
      { size: '18x18mm', code: 'QU1818', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-quad.jpg',
  },

  {
    id: 'pp-tri-quad',
    name: 'Pine Tri Quad',
    slug: 'pine-tri-quad',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine tri quad moulding.',
    features: ['Primed', 'Finger Jointed Pine', 'Tri Quad', '5.4m Lengths'],
    variants: [
      { size: '18x18mm', code: 'TQ1818', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-tri-quad.jpg',
  },

  // SCOTIA
  {
    id: 'pp-scotia',
    name: 'Pine Scotia',
    slug: 'pine-scotia',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine scotia for floor/wall and ceiling junctions.',
    features: ['Primed', 'Finger Jointed Pine', 'Scotia', '5.4m Lengths'],
    variants: [
      { size: '60x60mm coverage', code: 'SC6060', lengths: ['5.4m'] },
      { size: '40x40mm', code: 'SC4040', lengths: ['5.4m'] },
      { size: '30x30mm', code: 'SC3030', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-scotia.jpg',
  },

  // ARCHITRAVE BLOCK
  {
    id: 'pp-architrave-block',
    name: 'Pine Architrave Block',
    slug: 'pine-architrave-block',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine architrave blocks for door and window corners.',
    features: ['Primed', 'Finger Jointed Pine', 'Architrave Block'],
    variants: [
      { size: '135x32mm', code: 'AB13532' },
      { size: '106x29mm', code: 'AB10629' },
    ],
    soldBy: 'each',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-architrave-block.jpg',
  },

  // DADO RAIL
  {
    id: 'pp-dado',
    name: 'Pine Dado Rail',
    slug: 'pine-dado-rail',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine dado rail for wall decoration.',
    features: ['Primed', 'Finger Jointed Pine', 'Dado Rail', '5.4m Lengths'],
    variants: [
      { size: '33x34mm', code: 'DA3334', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-dado.jpg',
  },

  // EDWARDIAN PROFILE
  {
    id: 'pp-edwardian',
    name: 'Pine Edwardian',
    slug: 'pine-edwardian',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine Edwardian profile. Classic period design.',
    features: ['Primed', 'Finger Jointed Pine', 'Edwardian Profile', '5.4m Lengths'],
    variants: [
      { size: '225x18mm', code: 'ED22518', lengths: ['5.4m'] },
      { size: '180x18mm', code: 'ED18018', lengths: ['5.4m'] },
      { size: '135x18mm', code: 'ED13518', lengths: ['5.4m'] },
      { size: '90x18mm', code: 'ED9018', lengths: ['5.4m'] },
      { size: '65x18mm', code: 'ED6518', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-edwardian.jpg',
  },

  // NOSING
  {
    id: 'pp-nosing',
    name: 'Pine Nosing',
    slug: 'pine-nosing',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine stair nosing.',
    features: ['Primed', 'Finger Jointed Pine', 'Nosing', '5.4m Lengths'],
    variants: [
      { size: '65x32mm', code: 'NO6532', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-nosing.jpg',
  },

  // PICTURE RAIL
  {
    id: 'pp-picture-rail',
    name: 'Pine Picture Rail',
    slug: 'pine-picture-rail',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine picture rail for hanging artwork.',
    features: ['Primed', 'Finger Jointed Pine', 'Picture Rail', '5.4m Lengths'],
    variants: [
      { size: '68x24mm', code: 'PR6824', lengths: ['5.4m'] },
      { size: '60x24mm', code: 'PR6024', lengths: ['5.4m'] },
      { size: '60x18mm', code: 'PR6018', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-picture-rail.jpg',
  },

  // STEPPED PROFILE
  {
    id: 'pp-stepped',
    name: 'Pine Stepped',
    slug: 'pine-stepped',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine stepped profile. Modern stepped design.',
    features: ['Primed', 'Finger Jointed Pine', 'Stepped Profile', '5.4m Lengths'],
    variants: [
      { size: '180x18mm', code: 'ST18018', lengths: ['5.4m'] },
      { size: '135x18mm', code: 'ST13518', lengths: ['5.4m'] },
      { size: '90x18mm', code: 'ST9018', lengths: ['5.4m'] },
      { size: '65x18mm', code: 'ST6518', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-stepped.jpg',
  },

  // WAR SERVICE PROFILE
  {
    id: 'pp-war-service',
    name: 'Pine War Service',
    slug: 'pine-war-service',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine war service profile. Classic 1940s-50s design.',
    features: ['Primed', 'Finger Jointed Pine', 'War Service Profile', '5.4m Lengths'],
    variants: [
      { size: '180x18mm', code: 'WS18018', lengths: ['5.4m'] },
      { size: '135x18mm', code: 'WS13518', lengths: ['5.4m'] },
      { size: '90x18mm', code: 'WS9018', lengths: ['5.4m'] },
      { size: '65x18mm', code: 'WS6518', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-war-service.jpg',
  },

  // VICTORIAN PROFILE
  {
    id: 'pp-victorian',
    name: 'Pine Victorian',
    slug: 'pine-victorian',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine Victorian profile. Ornate period design for heritage homes.',
    features: ['Primed', 'Finger Jointed Pine', 'Victorian Profile', '5.4m Lengths'],
    variants: [
      { size: '280x18mm', code: 'VC28018', lengths: ['5.4m'] },
      { size: '225x18mm (A)', code: 'VC22518A', lengths: ['5.4m'] },
      { size: '225x18mm (B)', code: 'VC22518B', lengths: ['5.4m'] },
      { size: '180x18mm (A)', code: 'VC18018A', lengths: ['5.4m'] },
      { size: '180x18mm (B)', code: 'VC18018B', lengths: ['5.4m'] },
      { size: '165x32mm', code: 'VC16532', lengths: ['5.4m'] },
      { size: '135x32mm', code: 'VC13532', lengths: ['5.4m'] },
      { size: '135x18mm', code: 'VC13518', lengths: ['5.4m'] },
      { size: '115x18mm', code: 'VC11518', lengths: ['5.4m'] },
      { size: '90x18mm (A)', code: 'VC9018A', lengths: ['5.4m'] },
      { size: '90x18mm (B)', code: 'VC9018B', lengths: ['5.4m'] },
      { size: '90x18mm (C)', code: 'VC9018C', lengths: ['5.4m'] },
      { size: '90x18mm (D)', code: 'VC9018D', lengths: ['5.4m'] },
      { size: '65x18mm (A)', code: 'VC6518A', lengths: ['5.4m'] },
      { size: '65x18mm (B)', code: 'VC6518B', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-victorian.jpg',
    badge: 'Popular',
  },

  // LINING BOARD
  {
    id: 'pp-lining-board',
    name: 'Pine Lining Board',
    slug: 'pine-lining-board',
    category: 'Mouldings',
    categorySlug: 'mouldings',
    subcategory: 'Finger Jointed Pine',
    description: 'Primed finger jointed pine lining board for wall and ceiling applications.',
    features: ['Primed', 'Finger Jointed Pine', 'Lining Board', '5.4m Lengths'],
    variants: [
      { size: '138x11mm (302)', code: 'LB13811302', lengths: ['5.4m'] },
      { size: '138x11mm (321)', code: 'LB13811321', lengths: ['5.4m'] },
      { size: '138x11mm (5L)', code: 'LB138115L', lengths: ['5.4m'] },
    ],
    soldBy: 'length',
    imagePath: '/images/products/mouldings/finger-jointed-pine/',
    imageFilename: 'pp-lining-board.jpg',
  },
];
