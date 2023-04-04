const getPriceFromText = el => {
  const removeAllNonNumeric = el.replace(/[^0-9.]/g, '');
  return parseFloat(removeAllNonNumeric);
};

exports.getPriceFromText = getPriceFromText;
