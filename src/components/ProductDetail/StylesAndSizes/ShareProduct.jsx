import React from 'react';
import {
  FacebookShareButton, PinterestShareButton, TwitterShareButton,
  FacebookIcon, PinterestIcon, TwitterIcon
} from 'react-share';
import styles from './styles.css';

function ShareProduct() {
  return (
    <div data-testid="shareOnSocialContainer" id={styles.shareOnSocialContainer}>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon className={styles.shareButton} round size={25} />
      </FacebookShareButton>
      <PinterestShareButton url={window.location.href}>
        <PinterestIcon className={styles.shareButton} round size={25} />
      </PinterestShareButton>
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon className={styles.shareButton} round size={25} />
      </TwitterShareButton>
    </div>
  )
}

export default ShareProduct
