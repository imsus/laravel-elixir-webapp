var gulp = require('gulp');
var elixir = require('laravel-elixir');

// elixir plugins
require('laravel-elixir-browsersync-official');
require('laravel-elixir-webpack-official');

// override config
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';
elixir.config.browserSync = {
  files: [
    './src/**/*.{css,js}',
    './dist/*.html'
  ],
  proxy: false,
  server: {
    baseDir: './dist'
  }
}

elixir(function(mix) {
  mix.copy('src/**/*.{html,json,txt}', 'dist');
  mix.copy('src/img/**/*.*', 'dist/img');
  mix.copy('src/fonts/**/*.*', 'dist/fonts');

  mix.styles([
    'app.css'
  ], './dist/css/app.css');

  mix.webpack('app.js');

  mix.browserSync();
});
