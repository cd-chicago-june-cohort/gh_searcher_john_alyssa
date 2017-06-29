$(document).ready(function () {

  var $form = $('form');
  var $input = $('input[name="username"]');
  var $resultsList = $('#results-list');

  $form.submit(function (event) {
    event.preventDefault();
    var term = $input.val();
    getUserRepos(term, $resultsList);
  });
  
});

function getUserRepos (username, $ul) {
  $.getJSON( "https://api.github.com/users/" + username + "/repos", function( repos ) {
    // Loop Through Repos
    for (var i = 0; i < repos.length; i+=1) {
      // Console Log Each Key We Want
      var repo = repos[i];
      console.log(repo.name);
      console.log(repo.description);
      console.log(repo.pushed_at);
      console.log(repo.html_url);
      console.log('-----------');
      $ul.append('<li><a href="' + repo.html_url + '">' + repo.name + '</a></li>');
    }
  });
}