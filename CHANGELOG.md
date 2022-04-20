# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2021-04-20

### Added

- Added a CHANGELOG!
- Initial CHANGELOG entry. Version 1.0.0 is the same effective code as version 1.0.1-beta.0.
- GitHub build and test workflow
- Prettier, eslint, and editorconfig with accompanying configs

### Changed

- Updated package.json entries after package extraction from the planningcenter/design monorepo
- Moved from npm to yarn for package management
- Updated `node-sass` and `microbundle` dev dependencies to their latest versions
- Git ignored build artifacts (`css/*`, `dist/*`)
- Added `jest` and a simple canary test

[1.0.0]: https://github.com/planningcenter/sweetalert2/compare/v1.0.1-beta.0..v1.0.0
