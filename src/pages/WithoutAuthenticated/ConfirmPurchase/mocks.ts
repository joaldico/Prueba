export const getMocks = () => {
  /* const data = {
    name: 'Fracisco',
    lastName: 'Rofríguez',
    typeDocument: 'RUT',
    rut: '12345678',
    address: 'Noruega 6627, Las Condes, Santiago, Chile',
    phone: '+56323432432',
    email: 'daniel.tuten@yopmail.com',
    paymentMethod: [
      {
        name: 'Webpay',
        value: 'webpay',
        default: true,
      },
    ],
    servicesDetail: {
      service: 'Aseo hogar',
      serviceDate: '2021-20-10',
      schedule: '10:40',
      totalPayment: '304122',
    },
  };
   */
  const data2 = {
    paymentType: 'WEB_PAY',
    requestMethod: null,
    paymentUrl: null,
    headers: null,
    payload: null,
    hash: null,
    data: '{"unitName":"BackOffice","unitLogo":"logo.png","personDocumentType":"RUT","personFullName":"Misael Polidor","personAdress":"Caracas","personPhone":"5324243242","personEmail":"luis.tuten@yopmail.com","productType":"Servicio","productDateService":"2022-01-05 09:54","totalAmountToPay":"20"}',
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data2);
    }, 2000);
  });
};
