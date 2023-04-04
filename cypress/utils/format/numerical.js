const getMoney = (price) => {
    return parseInt(price.replace(/[\D]+/g, ""));
  };
  
  const formatReal = (price) => {
    var tmp = price + "";
    tmp = tmp.replace(/([0-9]{2})$/g, ".$1");
    if (tmp.length > 6) {
      tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, "$1.$2");
    }
  
    return parseFloat(tmp);
  };
  
  const getPriceFromText = (price) => {
    const priceInt = getMoney(price);
    return formatReal(priceInt);
  };
  
exports.getPriceFromText = getPriceFromText;
  