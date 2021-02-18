# tewnty20-before-after-block

First version of extensions to [Twenty20 Image Before-After](https://wordpress.org/plugins/twenty20/) plugin by [Zayed Baloch](https://zayedbaloch.com/).

This extensions add block to Gutenberg Editor.

To install it add in end of file ttwenty.php below code:
```
include_once('blocks/before-after-block.php');
```

And upload files from catalog - **blocks**.

At this moment we must place image ID manualy. 
I'm working to implement MediaUpload function.

Based on [php-block.js](https://gist.github.com/pento/cf38fd73ce0f13fcf0f0ae7d6c4b685d) by 
