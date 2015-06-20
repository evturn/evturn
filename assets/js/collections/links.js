var Links = Backbone.Collection.extend({
	model: Link,

});

var allLinks = function() {

  var linkData = links;

  var value = function() {
    var data = linkData();
    return new Links(data);
  };

  return value();
};

var contactLinks = allLinks();