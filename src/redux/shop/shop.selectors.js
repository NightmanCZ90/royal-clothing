import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.values(collections) // .keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector( // could have been easily done with RouteName
  [selectCollectionsForPreview],
  collections => collections[collectionUrlParam]
)