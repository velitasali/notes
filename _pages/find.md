---
layout: page
title: find
---

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="type something to find...">
<ol id="results-container" class="posts"></ol>
</div>

<!-- Script pointing to search-script.js -->
<script src="/search.js" type="text/javascript"></script>

<!-- Configuration -->
<script type="text/javascript">
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '{% include list_post_find_template.html %}',
  noResultsText: 'No results found',
  limit: 10,
  fuzzy: false,
  exclude: ['Welcome']
})
</script>