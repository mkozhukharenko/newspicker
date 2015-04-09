##News picker 

Newspicker app **website** could be found here: [mkozhukharenko.github.io/newspicker] [1]

#### App functionality
Application provide next functionality:
+ getting news by date (using calendar);
+ sorting received news by categories;
+ searching through received news (filter them);
+ get detailed news (pick one from received);

#### Used technologies
Application's been made using:
+ angular 1.3.14 (plus resource, route, sanitize)
+ angular UI: bootstrap

#### Used API
News is retrieving from the [The guardian][2]  using theirs [APIs][3].

#### App directory Layout
```
scr/                    
  js/            --> the view1 view template and logic
    app.js            --> main application modulee
    controllers.js    --> the controller logic
    servises.js         --> the servises
  css/                --> 
    app.css            --> default stylesheet
  partials/          --> the  view template 
    header.html            --> the header template
    news-details.html     --> the detailed news template
    news-list.html        --> the list news template
  index.html            --> the main html 
```

 [1]: http://mkozhukharenko.github.io/newspicker/src/index.html#/news
 [2]: http://www.theguardian.com/uk
 [3]: http://open-platform.theguardian.com/
