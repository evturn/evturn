import React from 'react';
import SiteNavigation from 'components/SiteNavigation';
import SiteNavbar from 'components/SiteNavbar';

export default ({ open, page, pages, toggle }) => {
  return (
    <header>
      <SiteNavbar
        page={page}
        toggle={toggle}
      />
      <SiteNavigation
        open={open}
        page={page}
        pages={pages}
        toggle={toggle}
      />
    </header>
  );
}