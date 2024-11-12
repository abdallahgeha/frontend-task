export const includesIgnoreCase = (text: string, search: string) =>
  text.toLowerCase().includes(search.toLowerCase())

export const getFormattedTitle = (title: string, searchParam: string) => {
  if (!searchParam) return [title]

  const parts = title.split(new RegExp(`(${searchParam})`, 'i'))
  return parts
}
