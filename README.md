# MascotBoard

## Installation
Install dependencies:

```
$ npm install

$ git submodule init && git submodule update
$ cd server && bundle install -j4
```


## Usage
### w/o server

```
$ npm start
```

### w/ server

```
# build frontend code
$ npm run build

# run webserver
# open localhost:9292 w/ web browser
$ cd server && bundle exec rackup -p 9292
```
