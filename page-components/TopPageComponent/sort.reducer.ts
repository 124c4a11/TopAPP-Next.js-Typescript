import { SortEnum } from "../../components/Sort/Sort.props";
import { IProductModel } from "../../interfaces/product.interface";

export type SortAction = { type: SortEnum.Rating } | { type: SortEnum.Price };

export interface SortReducerState {
  sort: SortEnum;
  products: IProductModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortAction
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => {
          return a.initialRating > b.initialRating ? -1 : 1;
        })
      };

    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => {
          return a.price > b.price ? 1 : -1;
        })
      };

    default:
      throw new Error('Неверный тип сортировки!');
  }
};
