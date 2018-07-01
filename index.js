var recipes = {}



function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { [key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectsByKey(object, key) {
  var newobj = Object.assign( {} )
  delete newobject.key
  return newobject
  }