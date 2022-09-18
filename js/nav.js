"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

function navSubmit(evt){
  console.debug("navSubmit", evt);
  hidePageComp();
  $allStoriesList.show();
  $submitForm.show();
}
$navSubmitStory.on("click", navSubmit);

function navFavs(evt){
  console.debug("navFavs", evt);
  hidePageComponents();
  putFavoriteListOnPage();
}

$body.on("click", "#nav-favorites", navFavs);

function navMine(evt){
  console.debug("navMine", evt);
  hidePageComponents();
  putStoriesOnPage();
  $ownStories.show();
}
$body.on("click", "#nav-my-stories", navMine);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
