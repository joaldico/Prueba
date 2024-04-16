module.exports = {
    // Automatically clear mock calls, instances and results before every test
    // clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
      '\\.(styl|css|svg|withConfig|png|scss|jpg)$': '<rootDir>/src/__mocks__/modulesMock.js'
    },
    testEnvironment: 'jsdom',
    verbose: true,
    // A list of paths to directories that Jest should use to search for files in
    roots: ['<rootDir>'],
    // transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)']
  };
  