export const Routes = {
    HOME: '/',
    SHOES: '/shoes',
    CARTS: '/carts',
    CLOTHES: '/clothes',
    PRODUCTS: '/products',
    FURNITURE: '/furniture',
    FAVORITES: '/favorites',
    ELECTRONICS: '/electronics',
    MISCELLANEOUS: '/miscellaneous',
    PRODUCT: (id: string) => `/product/${id}`,
    CATEGORY: (id: string) => `/categories?categoryId=${id}`,
}
