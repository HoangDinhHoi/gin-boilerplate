import {EmptyComponent} from '../components/atoms';

export function keyExtractor<T>(_: T, index: number) {
  return index.toString();
}

export const defaultFlatListProps = {
  keyExtractor: keyExtractor,
  showsVerticalScrollIndicator: false,
  scrollEventThrottle: 16,
  onEndReachedThreshold: 0.9,
  ListEmptyComponent: EmptyComponent,
  contentContainerStyle: {flexGrow: 1},
};

export const defaultFlatListHorizontalProps = {
  horizontal: true,
  showsHorizontalScrollIndicator: false,
};

export const THEME_PREFERENCES_KEY = 'THEME_PREFERENCES_KEY';
