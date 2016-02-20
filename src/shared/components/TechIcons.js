import React from 'react';
import classNames from 'classnames/bind';
import {
  UnorderedList, ListItem,
 IconContainer, IconCaption, Icon
} from './reuseables';

export default ({ items, width }) => {
  return (
    <UnorderedList>
      { items.map((item, i) => {
        return (
          <ListItem key={i} width={width}>
            <IconContainer>
              <Icon classname={item.icon} />
            </IconContainer>
            <IconCaption>{item.name}</IconCaption>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}