function processCategories(categories) {
    let categoryCount = categories.reduce(function(counts, category) {
      if (counts[category]) {
        counts[category] += 1;
      } else {
        counts[category] = 1;
      }
      return counts;
    }, {});
  
    return categoryCount;
  }
  
  let categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
  console.log(processCategories(categories));  