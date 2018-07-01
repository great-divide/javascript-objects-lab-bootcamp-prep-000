var recipes = {}



function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = object[key] = value
  return newobj
}

return Object.assign( {}, obj, { [key]})