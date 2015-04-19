# Productive Coffee

Productive Coffee is an app that aims to help people find and recommend good cafes to work in around London.

This was the second project I built while completing General Assembly's [Web Development Immersive](https://generalassemb.ly/education/web-development-immersive) course.

This was my first time using JavaScript/jQuery with Rails, Google Maps and Google APIs, and was also a team effort.

Key challenges included integrating Google Maps, displaying saved cafes on the maps, and using search functionality to return cafe results using the Google Places API and saving these to the database. We also had a complex rating system, allowing users to rate the different attributes of a cafe, which calculated the review's overall rating, which then updated the overall cafe rating.

#### Collaborators:
* [Colin Durbin](https://github.com/cddurbin)

## Built with
* Ruby v2.1.4
* Rails v4.2.0
* PostgreSQL
* JavaScript and jQuery

## Setup
To run this app locally, first clone the repository to your machine:

```
$ git clone https://github.com/mathewhawley/productive_coffee.git
```
Go into the new directory, make sure you have PostgreSQL running and type in the following commands into your terminal:

```
$ rake db:create
$ rake db:migrate
$ rake db:seed
```
Next, run a `bundle install` to install the necessary gems.

Finally type in `rails s` to start the server.

This project uses the _Thin_ Ruby web server, which defaults to port 3000. Open your browser and navigate to: http://localhost:3000.

## Demo
You can visit the live site [here](http://productive-coffee.herokuapp.com) — _best viewed in Chrome_.
