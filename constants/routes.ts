export const Routes = {
    HOME: '/',
    MEN: '/men',
    WOMEN: '/women',
    KIDS: '/kids',
    SPORTS: '/sports',
    CATEGORY: (id: string) => `/categories?categoryId=${id}`,
    PRODUCT: (id: string) => `/product/${id}`,
}
