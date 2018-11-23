// Write your solution in this file!
const driver = {};

function  updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
 
  newObj[key] = value;
 
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key){
  const newObj = delete driver.key;
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return delete driver.key
}