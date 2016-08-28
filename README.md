# MascotBoard
## Requirements
- Node.js
- Ruby 2.3.0
- Redis


## Installation
Install dependencies:

```
$ npm install

$ git submodule init && git submodule update
$ cd server && bundle install -j4
```


## Usage
### Develop w/o server

```
$ npm start
```

### Develop w/ server

```
# build frontend code
$ npm run build

# run webserver
# open localhost:9292
$ cd server && bundle exec rackup -p 9292

# run redis-server
$ redis-server
```


### Update server module

```
$ git submodule foreach "git pull origin master"
$ git commit -m "Update server module"
```


### License
???

