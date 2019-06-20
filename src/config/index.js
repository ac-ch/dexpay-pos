export default {
  debug: process.env.NODE_ENV === 'development',
  APP_VERSION: '0.0.4',
  siteName: 'Dexpay.me',
  siteUrl: 'https://www.dexpay.me',
  dashboardUrl: 'https://dashboard.dexpay.me',
  graphQlUri: 'https://dexpay-api.herokuapp.com/',
  // graphQlUri: 'http://localhost:4000/',
  logo: '',

  requiredConfirmations: 3,
  currencies: [
    { id: 'EUR', name: 'Euro', symbol: '€' },
    { id: 'USD', name: 'United States Dollar', symbol: '$' },
    { id: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { id: 'GBP', name: 'Pound sterling', symbol: '£' },
    { id: 'AUD', name: 'Australian dollar', symbol: 'A$' },
    { id: 'CAD', name: 'Canadian dollar', symbol: 'C$' },
    { id: 'CHF', name: 'Swiss franc', symbol: 'Fr' },
    { id: 'CNY', name: 'Renminbi', symbol: '元' },
    { id: 'INR', name: 'Indian rupee', symbol: '₹' }
  ]
};
