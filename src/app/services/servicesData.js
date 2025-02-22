// src/app/services/servicesData.js
export const services = {
  exterior: {
    title: 'Exterior Detailing',
    description: 'Complete exterior restoration and protection',
    tiers: {
      basic: {
        name: 'Basic Exterior',
        price: '$149',
        services: [
          'Hand wash and dry',
          'Wheel cleaning',
          'Tire dressing',
          'Basic paint decontamination',
          'Spray wax protection',
        ],
      },
      premium: {
        name: 'Premium Exterior',
        price: '$249',
        services: [
          'All Basic services',
          'Clay bar treatment',
          'Paint correction (minor)',
          'Ceramic coating (6 months)',
          'Wheel ceramic coating',
          'Premium tire dressing',
        ],
      },
      ultimate: {
        name: 'Ultimate Exterior',
        price: '$449',
        services: [
          'All Premium services',
          'Full paint correction',
          'Premium ceramic coating (2 years)',
          'Paint protection film (PPF)',
          'Headlight restoration',
          'Chrome treatment',
        ],
      },
    },
  },
  interior: {
    title: 'Interior Detailing',
    description: 'Deep cleaning and interior restoration',
    tiers: {
      basic: {
        name: 'Basic Interior',
        price: '$129',
        services: [
          'Vacuum all surfaces',
          'Wipe down surfaces',
          'Basic carpet cleaning',
          'Window cleaning',
          'Air freshener',
        ],
      },
      premium: {
        name: 'Premium Interior',
        price: '$229',
        services: [
          'All Basic services',
          'Deep carpet extraction',
          'Leather cleaning',
          'Stain removal',
          'UV protection application',
          'Steam cleaning',
        ],
      },
      ultimate: {
        name: 'Ultimate Interior',
        price: '$399',
        services: [
          'All Premium services',
          'Leather conditioning',
          'Headliner cleaning',
          'Ozone treatment',
          'Fabric protection coating',
          'Complete sanitization',
        ],
      },
    },
  },
};

export const additionalServices = [
  {
    name: 'Engine Bay Detailing',
    price: '$89',
    description: 'Deep cleaning and dressing of engine compartment',
  },
  {
    name: 'Paint Protection Film',
    price: 'From $499',
    description: 'Premium protection for high-impact areas',
  },
  {
    name: 'Headlight Restoration',
    price: '$129',
    description: 'Restore clarity to oxidized headlights',
  },
  {
    name: 'Ceramic Coating',
    price: 'From $699',
    description: 'Long-term paint protection and gloss enhancement',
  },
];
