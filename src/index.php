<?php 
include 'scripts/services/database.php';
include 'scripts/views/chatView.php';
var_dump($_SESSION);
?>
<a href="logout.php">logout</a>
<script>

import Router from './scripts/router';
import render from './scripts/views/render';
import './scripts/services/apiService';
import './index.scss';

const routes = [{
  url: '/',
  controller: render
}];

new Router(routes);
</script>