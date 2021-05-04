// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap';
import 'select2/dist/css/select2.min.css'
import 'jquery-bar-rating/dist/themes/css-stars';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { initSelect2 } from '../components/init_select2';
import { initStarRating } from '../components/init_star_rating';
import { initTyped } from '../components/init_typedjs';

document.addEventListener("turbolinks:load", function() {
  initSelect2();
  initTyped();
  initStarRating();
  AOS.init();
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
