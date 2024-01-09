export function useNormalizer() {
  const normalizeCep = (value: string | undefined) => {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})(\d+?)/, '$1')
  }

  const normalizeCardNumber = (value: string | undefined) => {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
  }

  const normalizePhoneNumber = (value: string | undefined) => {
    if (!value) return ''

    const onlyNumbers = value.replace(/[\D]/g, '')

    if (onlyNumbers.length === 9) {
      return onlyNumbers.replace(/(\d{5})(\d)/, '$1-$2')
    } else {
      return onlyNumbers.replace(/(\d{4})(\d)/, '$1-$2')
    }
  }

  const normalizeDate = (value: string | undefined) => {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?/, '$1')
  }

  const normalizeCpf = (value: string | undefined) => {
    if (!value) return ''

    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  return {
    normalizeCep,
    normalizeCardNumber,
    normalizePhoneNumber,
    normalizeDate,
    normalizeCpf,
  }
}
