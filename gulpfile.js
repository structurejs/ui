var chalk                  = require('chalk'),
    clean                  = require('gulp-clean'),
    concat                 = require('gulp-concat'),
    eslint                 = require('gulp-eslint'),
    gulp                   = require('gulp'),
    gutil                  = require('gulp-util'),
    livereload             = require('gulp-livereload'),
    mocha                  = require('gulp-mocha'),
    nano                   = require('gulp-cssnano'),
    nodemon                = require('nodemon'),
    path                   = require('path'),
    postcss                = require('gulp-postcss'),
    postcssAutoprefixer    = require('autoprefixer'),
    postcssColor           = require('postcss-color-function'),
    postcssDiscardComments = require('postcss-discard-comments'),
    postcssFontMagician    = require('postcss-font-magician'),
    postcssMixins          = require('postcss-mixins'),
    postcssNested          = require('postcss-nested'),
    postcssSimpleVars      = require('postcss-simple-vars'),
    size                   = require('gulp-size'),
    sourcemaps             = require('gulp-sourcemaps'),
    webpack                = require('webpack-stream')

gulp.task('app-styles', function() {
  //flush cache of the global vars js

  try {
    delete require.cache[require.resolve('./app/styles/base/variables')]
  } catch (e) {}

  return gulp.src([
    './app/styles/base/base.css',
    './app/styles/blocks/**/xs.css',
    './app/styles/blocks/**/sm.css',
    './app/styles/blocks/**/md.css',
    './app/styles/blocks/**/lg.css',
    './app/styles/blocks/**/**/xs.css',
    './app/styles/blocks/**/**/sm.css',
    './app/styles/blocks/**/**/md.css',
    './app/styles/blocks/**/**/lg.css',
    './app/components/**/xs.css',
    './app/components/**/sm.css',
    './app/components/**/md.css',
    './app/components/**/lg.css',
  ])
  .pipe(sourcemaps.init())
  .pipe(postcss([
    postcssMixins({mixinsDir: path.join(__dirname,'/app/styles/mixins/')}),
    postcssSimpleVars({variables: require('./app/styles/base/variables')}),
    postcssColor(),
    postcssFontMagician({
      hosted: './app/assets/fonts'
    }),
    postcssNested,
    postcssAutoprefixer({browsers: ['last 2 versions', '> 2%']}),
    postcssDiscardComments
  ]))
  .pipe(concat('app.css'))
  .pipe(nano())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'))
})

gulp.task('copy-assets', function(done) {

  gulp.src([
    './app/assets/**/*'
  ])
  .pipe(gulp.dest('./public/'))

  gulp.src([
    './bower_components/flat-ui/fonts/**'
  ])
  .pipe(gulp.dest('./public/fonts/'))

  done()

})

gulp.task('lint', function () {

    return gulp.src([
      'models/**/*.js',
      'schemas/**/*.js',
      'test/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())

})

gulp.task('mocha', function() {

  return gulp
    .src([
      './test/helpers/runner.js',
    ], {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .once('end', function () {
      process.exit()
    })

})

gulp.task('styles-watch', function () {

  nodemon({
    //ext: 'hbs',
    //ignore: ['*.css'],
    //nodeArgs: ['--debug'],
    script: 'index.js',
    watch: ['server']
  })
  .on('start', function() {

    livereload.listen()

    gulp.watch(path.join(__dirname, './app/assets/**/*'),                ['copy-assets'])
    gulp.watch(path.join(__dirname, './app/styles/**/*.css'),            ['app-styles'])
    gulp.watch(path.join(__dirname, './app/components/**/*.css'),        ['app-styles'])
    gulp.watch(path.join(__dirname, './public/**/*.css'),                livereload.changed)

  })
  //.on('change', ['lint'])
  .on('restart', function () {

    var files = arguments[0]

    files.forEach( function(file) {
      file = file.replace(process.cwd(), '') // Just show relative file path.

      console.log('File changed:', chalk.yellow(file))
    })

  })

})

gulp.task('test-watch', function () {

  nodemon({
    //env: ,
    ext: 'html',
    //nodeArgs: ['--debug'],
    script: 'test/helpers/browser/runner.js',
    watch: ['test/helpers/browser/runner.js']
  })
  .on('start', function() {

    livereload.listen()

    gulp.watch('app/**/*.js', ['test-webpack'])
    gulp.watch('app/**/*.js', livereload.reload)
    gulp.watch('test/integration/**/*.js', ['test-webpack'])
    gulp.watch('test/unit/**/*.js', ['test-webpack'])

  })
  .on('restart', function () {

    var files = arguments[0]

    files.forEach( function(file) {
      file = file.replace(process.cwd(), '') // Just show relative file path.

      console.log('File changed:', chalk.yellow(file))
    })

  })

})

gulp.task('test-webpack', function() {

  gulp.src([])
  .pipe(webpack(require('./webpack.test')))
  .pipe(gulp.dest('./test/helpers/browser/js/'))

})

gulp.task('vendor-styles', function(done) {

  gulp.src([
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/flat-ui/dist/css/flat-ui.min.css',
    './bower_components/SpinKit/css/spinkit.css',
    './bower_components/SpinKit/css/spinners/3-wave.css'
  ])
  .pipe(concat('vendor.css'))
  .pipe(nano())
  .pipe(gulp.dest('./public/css'))

  gulp.src([
    './bower_components/bootstrap/dist/css/bootstrap.css.map',
    './bower_components/flat-ui/dist/css/flat-ui.css.map',
  ])
  .pipe(gulp.dest('./public/css'))

  done()

})

gulp.task('watch', function () {

  nodemon({
    //ext: 'hbs',
    ignore: ['*.css'],
    //nodeArgs: ['--debug'],
    script: 'index.js',
    watch: ['server']
  })
  .on('start', function() {

    livereload.listen()

    gulp.watch(path.join(__dirname, './app/assets/**/*'),             ['copy-assets'])
    gulp.watch(path.join(__dirname, './app/styles/blocks/**/*.css'),  ['app-css'])
    gulp.watch(path.join(__dirname, './app/styles/blocks/**/*.js'),   ['app-css'])
    gulp.watch(path.join(__dirname, './public/**/*.css'),             livereload.changed)
    gulp.watch(path.join(__dirname, './public/**/*.js'),              livereload.changed)
    gulp.watch(path.join(__dirname, './app/**/*.js'),                 ['webpack'])

  })
  //.on('change', ['lint'])
  .on('restart', function () {

    var files = arguments[0]

    files.forEach( function(file) {
      file = file.replace(process.cwd(), '') // Just show relative file path.

      console.log('File changed:', chalk.yellow(file))
    })

  })

})

gulp.task('webpack', function() {

  gulp.src([])
  .pipe(webpack(require('./webpack.config')))
  .pipe(gulp.dest('./public/js/'))

})

gulp.task('b',      ['build'])
gulp.task('build',  ['copy', 'styles', 'webpack'])
gulp.task('copy',   ['copy-assets'])
gulp.task('styles', ['vendor-styles', 'app-styles'])
gulp.task('sw',     ['styles', 'styles-watch'])
gulp.task('t',      ['mocha'])
gulp.task('tw',     ['test-webpack', 'test-watch'])
gulp.task('w',      ['build', 'watch'])
