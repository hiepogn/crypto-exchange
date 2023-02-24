export type PaginationState = {
  page: number
  size: number
  search?: string
}

export const generateSttWithPagination = (pagination: PaginationState, index: number): any => {
  if (pagination.page === 1) return index + 1
  return (pagination.page - 1) * pagination.size + (index + 1)
}
