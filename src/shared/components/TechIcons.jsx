import React from 'react';
import classNames from 'classnames/bind';
import FontIcon from 'components/FontIcon';
import {
  UnorderedList, ListItem,
 IconContainer, IconCaption
} from 'components/reuseables';

export default ({ items, width }) => {
  return (
    <UnorderedList>
      { items.map((item, i) => {
        return (
          <ListItem key={i} width={width}>
            <IconContainer>
              <FontIcon name={item.icon} />
            </IconContainer>
            <IconCaption>{item.name}</IconCaption>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}