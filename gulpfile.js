var elixir = require('laravel-elixir');

elixir(function(mix) {
  mix.less('app.less');
  mix.scripts('app.js');
  mix.browserSync();
});
