export default class Currency {
  static format(
    value: number,
    locales: string = 'pt-BR',
    currency: string = 'BRL'
  ) : string {
    return (value).toLocaleString(locales, {
      style: "currency",
      currency: currency,
    })
  }
}