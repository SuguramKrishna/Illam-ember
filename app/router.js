import EmberRouter from '@ember/routing/router';
import config from 'illam-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('list');
  this.route('add');
  this.route('contact');
  this.route('about');
});
