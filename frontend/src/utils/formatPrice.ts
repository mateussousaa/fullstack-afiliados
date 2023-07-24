const formatPrice = (price: number) => {
  const formattedPrice = (price / 100).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedPrice
}

export { formatPrice }