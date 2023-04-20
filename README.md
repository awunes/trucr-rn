#
#
# Required installs

# 1 Install React Navigation
    npm install react-navigation

# 2 Install Dependencies
    npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# 3 Install React Navigation Stack
    npm install react-navigation-stack @react-native-community/masked-view

# 4 Find the babel.config.js file and add the following line to the return:
    plugins: ["react-native-reanimated/plugin"],

# Updated 'babel.config.js' should look like this:
    module.exports = function (api) {
    api.cache(true);
      return {
        presets: ["babel-preset-expo"],
        plugins: ["react-native-reanimated/plugin"],
      };
    };

# Users can find the States or Provinces they will be traveling through and go straight to the road condition report for that State or Province on the North American Continent.
