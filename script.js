$(document).ready(function () {

  var $form = $('form');
  var $input = $('input[name="search_name"]');
  var $type = $('input[name="search_type"]');
  var $resultsList = $('#results-list');

  $form.submit(function (event) {
    $resultsList.html('');
    event.preventDefault();
    var term = $input.val();
    var type = $type.val();
    getUserRepos(term, type, $resultsList);
  });
  
});

function getUserRepos (searchName, searchType, $ul) {
  $.getJSON( "https://api.github.com/" + searchType + '/' + searchName + "/repos", function( repos ) {
    // Loop Through Repos
    var avatar = repos[0].owner.avatar_url;
    $ul.append('<li><img src="' + avatar + '" alt="avatar"></li>');
    for (var i = 0; i < repos.length; i+=1) {
      // Console Log Each Key We Want
      var repo = repos[i];
      var pushedTime = new Date(repo.pushed_at).toDateString();
      $ul.append('<li><a href="' + repo.html_url + '">' + repo.name + '</a><ul><li>Description: ' + repo.description + '</li><li>Pushed at: ' + pushedTime + '</li></ul></li>');
    }
  });

}
