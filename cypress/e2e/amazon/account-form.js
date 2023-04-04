const addValueBySelector =(selector, value)=>{
    cy.get(selector).type(value);
  }
  
  const setName=(value)=>{
    const selector = "#ap_customer_name";
    addValueBySelector(selector, value)
  }
  
  const setEmail=(value)=>{
    const selector = "#ap_email";
    addValueBySelector(selector, value)
  }
  
  const setPassword=(value)=>{
    const selector = "#ap_password";
    addValueBySelector(selector, value);
  }
  
  const setPasswordCheck=(value)=>{
    const selector = "#ap_password_check";
    addValueBySelector(selector, value);
  }

exports.addValueBySelector = addValueBySelector;
exports.setName = setName;
exports.setEmail = setEmail;
exports.setPassword = setPassword;
exports.setPasswordCheck = setPasswordCheck;