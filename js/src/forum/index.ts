import { components } from '@acpl-mobile-tab';
import { extend } from 'flarum/common/extend';

const { MobileTab, MobileTabItem } = components;

export default () => {
  extend(MobileTab.prototype, 'items', (items) => {
    // Remove item
    items.remove('home');
  });
};