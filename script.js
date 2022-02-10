'use strict';

import Post from "./Post.js";

const FOLLOWINGS_COUNT_PLACEHOLDER = '{{followings-count}}'
const FOLLOWERS_COUNT_PLACEHOLDER = '{{followers-count}}'
const REPOSES_COUNT_PLACEHOLDER = '{{reposes-count}}'
const IMAGE_SRC_PLACEHOLDER = '{{image-src}}';
const NOT_FOUND_MESSAGE = 'User with requested name not found';
const ENTER_USER_NAME_MESSAGE = 'Please enter github user name';

const profileTemplate = document.querySelector('#profile-template').innerHTML;
const title = document.querySelector('#username');
const getProfileButton = document.querySelector('#get-profile-button');
const profileInfoContainer = document.querySelector('#profile-info-container');

getProfileButton.addEventListener('click', onGetPostListBtnClick)

function onGetPostListBtnClick() {
  const userName = title.value?.trim();
  if (userName?.length) {

    Post.getList(userName)

      .then((response) => {
        renderUser(response);
      })
      .catch(() => {
        profileInfoContainer.innerHTML = NOT_FOUND_MESSAGE;
      });
  } else {
    profileInfoContainer.innerHTML = ENTER_USER_NAME_MESSAGE;
  }
}

function renderUser(response) {
  const htmlContent = profileTemplate
    .replace(IMAGE_SRC_PLACEHOLDER, response.avatar_url)
    .replace(REPOSES_COUNT_PLACEHOLDER, response.public_repos)
    .replace(FOLLOWERS_COUNT_PLACEHOLDER, response.followers)
    .replace(FOLLOWINGS_COUNT_PLACEHOLDER, response.following);

  profileInfoContainer.innerHTML = htmlContent;
}







