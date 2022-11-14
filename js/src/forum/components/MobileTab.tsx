import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import { ComponentAttrs } from 'flarum/common/Component';
import { Vnode, Children } from 'mithril';
import listItems from 'flarum/common/helpers/listItems';
import ItemList from 'flarum/common/utils/ItemList';
import MobileTabItem from './MobileTabItem';
import LinkButton from 'flarum/common/components/LinkButton';
import Button from 'flarum/common/components/Button';
import LogInModal from 'flarum/forum/components/LogInModal';

import MobileTabSessionDropdown from './MobileTabSessionDropdown';

export default class MobileTab extends Component {
  view(vnode: Vnode<ComponentAttrs, this>): Children {
    return (
      <nav className="MobileTab">
        <ul className="MobileTab-items">{listItems(this.items().toArray())}</ul>
      </nav>
    );
  }

  items(): ItemList<Children> {
    const items = new ItemList<Children>();

    items.add('home', <MobileTabItem route="http://capomod.com" icon="fas fa-home" label={app.translator.trans('capomod-mobile-tab.forum.home')} />, 100);

    items.add('discuss', <MobileTabItem route="http://capomod.com/all" icon="fas fa-tags" label={app.translator.trans('capomod-mobile-tab.forum.discuss')} />, 100);

    items.add('capomsg', <MobileTabItem route="http://capomod.com/t/CapoMsg" icon="fa-solid fa-virus" label={app.translator.trans('capomod-mobile-tab.forum.capomsg')} />, 100);

    if (app.session.user) {
      items.add('session', <MobileTabSessionDropdown />, 70);
    } else {
      items.add(
        'logIn',
        <Button icon="fas fa-user" className="Button Button--link" onclick={() => app.modal.show(LogInModal, {})}>
          {app.translator.trans('core.forum.header.log_in_link')}
        </Button>,
        70
      );
    }
    return items;
  }
}
