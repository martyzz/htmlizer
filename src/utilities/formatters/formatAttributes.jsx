const formatAttributes = (attributes, maxLength) => {
  let text = "";

  attributes.forEach(
    ({ key, value }) => (text += value ? `${key}=${value} ` : `${key} `)
  );

  text =
    text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;

  return text.trim();
};

export default formatAttributes;
