module.exports = {
    "*.{ts,js,tsx,jsx}": "npm run test -- --findRelatedTests --watchAll=false",
    "*.{tsx,jsx}": () => "npm run test src/Storyshots.test.js -- --watchAll=false"
};