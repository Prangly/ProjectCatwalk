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
        <FacebookIcon round size={15} />
      </FacebookShareButton>
      <PinterestShareButton url={window.location.href}>
        <PinterestIcon round size={15} />
      </PinterestShareButton>
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon round size={15} />
      </TwitterShareButton>
    </div>
  )
}

export default ShareProduct
