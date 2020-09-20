import { Product } from '../../product';
import { createAction, props } from '@ngrx/store';

export const loadProductsSuccess = createAction(
    '[Product API] Load Success',
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    '[Product API] load Fail',
    props<{ error: string }>()
);

export const updateProductSuccess = createAction(
    '[Product API] Update Product Success',
    props<{ product: Product }>()
);

export const updateProductFailure = createAction(
    '[Product API] Update Product Fail',
    props<{ error: string }>()
);