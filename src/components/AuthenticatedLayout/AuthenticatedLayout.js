import React from 'react';
import { NavLink } from 'react-router-dom';
import { bool, string, node } from 'prop-types';
import cx from 'classnames';
import Breadcrumbs from './Breadcrumbs';
import Navigation from './Navigation';
import AddressBar from './AddressBar';
import logo from '../../images/logo.svg';
import styles from './AuthenticatedLayout.scss';

export default function AuthenticatedLayout(props) {
  return (
    <div className={cx(styles.authenticatedLayout, process.platform)}>
      <div className={styles.menu}>
        <header>
          <NavLink exact to="/">
            <img src={logo} alt="nOS Logo" width="36" height="36" />
          </NavLink>
        </header>
        <Navigation authenticated={props.authenticated} />
      </div>
      <main className={styles.main}>
        <AddressBar />
        <Breadcrumbs />
        <div className={styles.content}>{props.children}</div>
        <footer className={styles.footer}>
          <div className={styles.status}>
            Network: {props.currentNetwork}
          </div>
        </footer>
      </main>
    </div>
  );
}

AuthenticatedLayout.displayName = 'AuthenticatedLayout';

AuthenticatedLayout.propTypes = {
  children: node,
  authenticated: bool,
  currentNetwork: string.isRequired
};

AuthenticatedLayout.defaultProps = {
  children: null,
  authenticated: false
};
