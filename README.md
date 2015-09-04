# ng-tweet-card

Simple directive to create a Tweet card with the Twitter widgets api.

## install
Install with bower

```cmd
bower install ngTweetCard --save
```

or npm

```cmd
npm install ngTweetCard --save
```
or download manually

## usage


Include the Twitter Widgets library, and include the directive module.

```html
<script src="http://platform.twitter.com/widgets.js"></script>
<script src="bower/ngTweetCard/dist/ngTweetCard.min.js"></script>
```

Now you can create a Twitter card with the following markup.

```html
<tweet-card tweet-id="639685607313289217" theme="light"></tweet-card>
<div tweet-card tweet-id="639685607313289217" theme="light"></div>
<div tweet-card="639685607313289217" theme="light"></div>
<div class="tweet-card:639685607313289217;"></div>
```

You can choose between 'light' and 'dark' theme.  
It is also possible to put content inside the card, which will be removed once the card has been loaded.