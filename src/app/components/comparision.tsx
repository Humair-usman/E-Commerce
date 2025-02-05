import React from 'react';

const ProductComparison = () => {
  const products = [
    {
      name: 'Asgaard Sofa',
      price: 'Rs. 250,000.00',
      rating: 4.7,
      reviews: 204,
      details: {
        general: {
          salesPackage: '1 sectional sofa',
          modelNumber: 'TFCBLUGRBL6SRHS',
          secondaryMaterial: 'Solid Wood',
          configuration: 'L-shaped',
          upholsteryMaterial: 'Fabric & Cotton',
          upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
          fillingMaterial: 'Foam',
          finishType: 'Bright Grey & Lion',
          adjustableHeadrest: 'No',
          maxLoadCapacity: '280 KG',
          origin: 'India',
        },
      },
    },
    {
      name: 'Outdoor Sofa Set',
      price: 'Rs. 224,000.00',
      rating: 4.2,
      reviews: 145,
      details: {
        general: {
          salesPackage: '1 Three Seater, 2 Single Seater',
          modelNumber: 'DTUBLUGRBL568',
          secondaryMaterial: 'Solid Wood',
          configuration: 'L-shaped',
          upholsteryMaterial: 'Fabric & Cotton',
          upholsteryColor: 'Bright Grey & Lion',
        },
        product: {
          fillingMaterial: 'Matte',
          finishType: 'Bright Grey & Lion',
          adjustableHeadrest: 'Yes',
          maxLoadCapacity: '300 KG',
          origin: 'India',
        },
      },
    },
  ];

  return (
    <div>
      <h1>Product Comparison</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {products.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '20px', width: '45%' }}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>Rating: {product.rating} ⭐ ({product.reviews} Reviews)</p>
            <h3>General</h3>
            <ul>
              {Object.entries(product.details.general).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                </li>
              ))}
            </ul>
            <h3>Product</h3>
            <ul>
              {Object.entries(product.details.product).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;