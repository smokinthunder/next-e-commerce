export default {
  name: 'cart',
  type: 'document',
  title: 'Cart',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of User',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Id of User',
    },
    {
      name: 'products',
      type: 'array',
      title: 'Products in Cart',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    },
  ],
}
