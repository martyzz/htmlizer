const elementsFilter = (elements, filterText) => {
  const query = filterText.toLowerCase().trim();

  return elements.filter(element => {
    if (element.type && element.type.search(query) !== -1) return true;
    if (element.tagName && element.tagName.search(query) !== -1) return true;
    return false;
  });
  
};

export default elementsFilter;
