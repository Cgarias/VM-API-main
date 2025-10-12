const factories = {};

function register(provider, factoryClass) {
  factories[provider.toLowerCase()] = factoryClass;
}

function getFactory(provider) {
  return factories[provider.toLowerCase()];
}

module.exports = { register, getFactory };
