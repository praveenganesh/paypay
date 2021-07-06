const productionEnv = {
    links: {
      playStore: "#",
      appStore: "#",
      about: "#",
      hiring: "#",
      support: "#",
    },
    metaData: {
      desciption: "",
    },
  };
  
  const Configurations = {
    production: { ...productionEnv },
    development: { ...productionEnv },
  };
  
  function getEnvironment() {
    // you can set platform from env
    const platform = "production";
    return Configurations[platform];
  }
  
  const Config = getEnvironment();
  module.exports = Config;
  