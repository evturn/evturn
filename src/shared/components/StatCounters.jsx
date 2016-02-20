import React from 'react';
import StatCounter from './StatCounter';
import classNames from 'classnames/bind';
import {
  UnorderedList, ListItem, SectionContainer,
  IconContainer, IconCaption
} from './reuseables';

export default class StatCounters extends React.Component {
  render() {
    return (
      <UnorderedList>{this.props.items.map((item, i) => {
        return (
          <ListItem key={i} width={'50%'}>
            <IconContainer>
              <StatCounter number={item.number} />
            </IconContainer>
            <IconCaption>{item.caption}</IconCaption>
          </ListItem>
        );
      })}</UnorderedList>
    );
  }
}