# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.197](https://github.com/ueberdosis/editfish/compare/v2.0.0-beta.196...v2.0.0-beta.197) (2022-09-17)

**Note:** Version bump only for package @editfish/extension-code-block





# 2.0.0-beta.196 (2022-09-17)


### Bug Fixes

* add attributes to pre tag instead of code tag by default, fix [#2440](https://github.com/ueberdosis/editfish/issues/2440) ([85fcc29](https://github.com/ueberdosis/editfish/commit/85fcc29ac6ef9e07847d5e0a5cdd318f4300a832))
* add exports to package.json ([1277fa4](https://github.com/ueberdosis/editfish/commit/1277fa47151e9c039508cdb219bdd0ffe647f4ee))
* add support for pasted content from VS Code, fix [#2022](https://github.com/ueberdosis/editfish/issues/2022) ([0e0b0b6](https://github.com/ueberdosis/editfish/commit/0e0b0b6a8c1d80ef9084d1913a51dd9bff8a69d8))
* don’t use state in KeyboardShortcutCommand anymore ([92ced9f](https://github.com/ueberdosis/editfish/commit/92ced9f9987d59ac672da65b2a685d296307c6b0))
* fix bug on paste when using code blocks ([d60fe35](https://github.com/ueberdosis/editfish/commit/d60fe350d148a0b39a6cdd6b439e3d9325506872))
* parse correct language for code blocks with multiple classes (see [#1845](https://github.com/ueberdosis/editfish/issues/1845)) ([472f213](https://github.com/ueberdosis/editfish/commit/472f2139c52b9e0211ccd735e937486df2cb3d30))
* prevent named capturing groups, fix [#2128](https://github.com/ueberdosis/editfish/issues/2128) ([0e9930f](https://github.com/ueberdosis/editfish/commit/0e9930f90f253f8667d1436dcf6c93279fda9aed))
* remove codeblock when at start of document, fix [#262](https://github.com/ueberdosis/editfish/issues/262) ([92f6ea2](https://github.com/ueberdosis/editfish/commit/92f6ea25cc7623d0bd34f5a2342be6f5aae951aa))
* remove some magic strings ([6c34dec](https://github.com/ueberdosis/editfish/commit/6c34dec33ac39c9f037a0a72e4525f3fc6d422bf))
* revert adding exports ([bc320d0](https://github.com/ueberdosis/editfish/commit/bc320d0b4b80b0e37a7e47a56e0f6daec6e65d98))
* revert adding type: module ([f8d6475](https://github.com/ueberdosis/editfish/commit/f8d6475e2151faea6f96baecdd6bd75880d50d2c))
* strip carriage return chars from text pasted as code and add missing paste meta information ([b1c56e6](https://github.com/ueberdosis/editfish/commit/b1c56e6f163af1a432621894e19f39243a38c4e4))


### Features

* add exitOnTripleEnter and exitOnArrowDown options to CodeBlock extension ([a35b7fb](https://github.com/ueberdosis/editfish/commit/a35b7fbe2cee0390895aaeb358503b5ead116b64))
* escape code blocks on arrow down, fix [#1204](https://github.com/ueberdosis/editfish/issues/1204) ([ffafff9](https://github.com/ueberdosis/editfish/commit/ffafff9e365f9636fae4a67bb825d49b7d95cb94))
* escape code blocks on triple enter, fix [#2195](https://github.com/ueberdosis/editfish/issues/2195) ([d48fb24](https://github.com/ueberdosis/editfish/commit/d48fb24ee2bd287f79e58f3fb59d8ebbda213240))
* fork form tiptap and update project name ([4e83f47](https://github.com/ueberdosis/editfish/commit/4e83f471f558450547d3d0269ca1648cbcad94c1))
* Integrate input rules and paste rules into the core ([#1997](https://github.com/ueberdosis/editfish/issues/1997)) ([723b955](https://github.com/ueberdosis/editfish/commit/723b955cecc5c92c8aad897ce16c60fb62976571))
* parseHTML for attributes should return the value instead of an object now, fix [#1863](https://github.com/ueberdosis/editfish/issues/1863) ([8a3b47a](https://github.com/ueberdosis/editfish/commit/8a3b47a529d28b28b50d634c6ff69b8e5aad3080))


### Reverts

* Revert "Publish" ([9c38d27](https://github.com/ueberdosis/editfish/commit/9c38d2713e6feac5645ad9c1bfc57abdbf054576))
* Revert "use global namespace" ([0c9ce26](https://github.com/ueberdosis/editfish/commit/0c9ce26c02c07d88a757c01b0a9d7f9e2b0b7502))





# [2.0.0-beta.195](https://github.com/ueberdosis/tiptap/compare/v2.0.0-beta.194...v2.0.0-beta.195) (2022-09-14)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.194](https://github.com/ueberdosis/tiptap/compare/v2.0.0-beta.193...v2.0.0-beta.194) (2022-09-11)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.42](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.41...@editfish/extension-code-block@2.0.0-beta.42) (2022-06-27)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.41](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.40...@editfish/extension-code-block@2.0.0-beta.41) (2022-06-20)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.40](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.38...@editfish/extension-code-block@2.0.0-beta.40) (2022-06-17)


### Reverts

* Revert "Publish" ([9c38d27](https://github.com/ueberdosis/tiptap/commit/9c38d2713e6feac5645ad9c1bfc57abdbf054576))





# [2.0.0-beta.38](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.38...@editfish/extension-code-block@2.0.0-beta.38) (2022-06-17)


### Reverts

* Revert "Publish" ([9c38d27](https://github.com/ueberdosis/tiptap/commit/9c38d2713e6feac5645ad9c1bfc57abdbf054576))





# [2.0.0-beta.37](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.36...@editfish/extension-code-block@2.0.0-beta.37) (2022-01-26)


### Bug Fixes

* add attributes to pre tag instead of code tag by default, fix [#2440](https://github.com/ueberdosis/tiptap/issues/2440) ([85fcc29](https://github.com/ueberdosis/tiptap/commit/85fcc29ac6ef9e07847d5e0a5cdd318f4300a832))





# [2.0.0-beta.36](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.35...@editfish/extension-code-block@2.0.0-beta.36) (2022-01-20)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.35](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.34...@editfish/extension-code-block@2.0.0-beta.35) (2022-01-05)


### Bug Fixes

* prevent named capturing groups, fix [#2128](https://github.com/ueberdosis/tiptap/issues/2128) ([0e9930f](https://github.com/ueberdosis/tiptap/commit/0e9930f90f253f8667d1436dcf6c93279fda9aed))





# [2.0.0-beta.34](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.33...@editfish/extension-code-block@2.0.0-beta.34) (2022-01-05)


### Features

* add exitOnTripleEnter and exitOnArrowDown options to CodeBlock extension ([a35b7fb](https://github.com/ueberdosis/tiptap/commit/a35b7fbe2cee0390895aaeb358503b5ead116b64))





# [2.0.0-beta.33](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.32...@editfish/extension-code-block@2.0.0-beta.33) (2021-12-22)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.32](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.31...@editfish/extension-code-block@2.0.0-beta.32) (2021-12-16)


### Features

* escape code blocks on arrow down, fix [#1204](https://github.com/ueberdosis/tiptap/issues/1204) ([ffafff9](https://github.com/ueberdosis/tiptap/commit/ffafff9e365f9636fae4a67bb825d49b7d95cb94))





# [2.0.0-beta.31](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.30...@editfish/extension-code-block@2.0.0-beta.31) (2021-12-05)


### Features

* escape code blocks on triple enter, fix [#2195](https://github.com/ueberdosis/tiptap/issues/2195) ([d48fb24](https://github.com/ueberdosis/tiptap/commit/d48fb24ee2bd287f79e58f3fb59d8ebbda213240))





# [2.0.0-beta.30](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.29...@editfish/extension-code-block@2.0.0-beta.30) (2021-12-02)


### Bug Fixes

* remove some magic strings ([6c34dec](https://github.com/ueberdosis/tiptap/commit/6c34dec33ac39c9f037a0a72e4525f3fc6d422bf))





# [2.0.0-beta.29](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.28...@editfish/extension-code-block@2.0.0-beta.29) (2021-11-09)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.28](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.27...@editfish/extension-code-block@2.0.0-beta.28) (2021-11-09)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.27](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.26...@editfish/extension-code-block@2.0.0-beta.27) (2021-11-09)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.26](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.25...@editfish/extension-code-block@2.0.0-beta.26) (2021-10-31)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.25](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.24...@editfish/extension-code-block@2.0.0-beta.25) (2021-10-26)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.24](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.23...@editfish/extension-code-block@2.0.0-beta.24) (2021-10-14)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.23](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.22...@editfish/extension-code-block@2.0.0-beta.23) (2021-10-14)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.22](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.21...@editfish/extension-code-block@2.0.0-beta.22) (2021-10-13)


### Bug Fixes

* strip carriage return chars from text pasted as code and add missing paste meta information ([b1c56e6](https://github.com/ueberdosis/tiptap/commit/b1c56e6f163af1a432621894e19f39243a38c4e4))





# [2.0.0-beta.21](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.20...@editfish/extension-code-block@2.0.0-beta.21) (2021-10-12)


### Bug Fixes

* fix bug on paste when using code blocks ([d60fe35](https://github.com/ueberdosis/tiptap/commit/d60fe350d148a0b39a6cdd6b439e3d9325506872))





# [2.0.0-beta.20](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.19...@editfish/extension-code-block@2.0.0-beta.20) (2021-10-12)


### Bug Fixes

* add support for pasted content from VS Code, fix [#2022](https://github.com/ueberdosis/tiptap/issues/2022) ([0e0b0b6](https://github.com/ueberdosis/tiptap/commit/0e0b0b6a8c1d80ef9084d1913a51dd9bff8a69d8))





# [2.0.0-beta.19](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.18...@editfish/extension-code-block@2.0.0-beta.19) (2021-10-08)


### Features

* Integrate input rules and paste rules into the core ([#1997](https://github.com/ueberdosis/tiptap/issues/1997)) ([723b955](https://github.com/ueberdosis/tiptap/commit/723b955cecc5c92c8aad897ce16c60fb62976571))





# [2.0.0-beta.18](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.17...@editfish/extension-code-block@2.0.0-beta.18) (2021-09-08)


### Bug Fixes

* parse correct language for code blocks with multiple classes (see [#1845](https://github.com/ueberdosis/tiptap/issues/1845)) ([472f213](https://github.com/ueberdosis/tiptap/commit/472f2139c52b9e0211ccd735e937486df2cb3d30))


### Features

* parseHTML for attributes should return the value instead of an object now, fix [#1863](https://github.com/ueberdosis/tiptap/issues/1863) ([8a3b47a](https://github.com/ueberdosis/tiptap/commit/8a3b47a529d28b28b50d634c6ff69b8e5aad3080))





# [2.0.0-beta.17](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.16...@editfish/extension-code-block@2.0.0-beta.17) (2021-07-26)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.16](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.15...@editfish/extension-code-block@2.0.0-beta.16) (2021-06-07)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.15](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.14...@editfish/extension-code-block@2.0.0-beta.15) (2021-05-18)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.14](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.13...@editfish/extension-code-block@2.0.0-beta.14) (2021-05-13)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.13](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.12...@editfish/extension-code-block@2.0.0-beta.13) (2021-05-07)


### Bug Fixes

* revert adding exports ([bc320d0](https://github.com/ueberdosis/tiptap/commit/bc320d0b4b80b0e37a7e47a56e0f6daec6e65d98))





# [2.0.0-beta.12](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.11...@editfish/extension-code-block@2.0.0-beta.12) (2021-05-06)


### Bug Fixes

* revert adding type: module ([f8d6475](https://github.com/ueberdosis/tiptap/commit/f8d6475e2151faea6f96baecdd6bd75880d50d2c))





# [2.0.0-beta.11](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.10...@editfish/extension-code-block@2.0.0-beta.11) (2021-05-06)


### Bug Fixes

* add exports to package.json ([1277fa4](https://github.com/ueberdosis/tiptap/commit/1277fa47151e9c039508cdb219bdd0ffe647f4ee))





# [2.0.0-beta.10](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.9...@editfish/extension-code-block@2.0.0-beta.10) (2021-05-06)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.9](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.8...@editfish/extension-code-block@2.0.0-beta.9) (2021-05-05)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.8](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.7...@editfish/extension-code-block@2.0.0-beta.8) (2021-04-23)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.7](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.6...@editfish/extension-code-block@2.0.0-beta.7) (2021-04-22)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.6](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.5...@editfish/extension-code-block@2.0.0-beta.6) (2021-04-21)


### Bug Fixes

* don’t use state in KeyboardShortcutCommand anymore ([92ced9f](https://github.com/ueberdosis/tiptap/commit/92ced9f9987d59ac672da65b2a685d296307c6b0))





# [2.0.0-beta.5](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.4...@editfish/extension-code-block@2.0.0-beta.5) (2021-04-16)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.4](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.3...@editfish/extension-code-block@2.0.0-beta.4) (2021-04-15)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.3](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.2...@editfish/extension-code-block@2.0.0-beta.3) (2021-04-11)


### Bug Fixes

* remove codeblock when at start of document, fix [#262](https://github.com/ueberdosis/tiptap/issues/262) ([92f6ea2](https://github.com/ueberdosis/tiptap/commit/92f6ea25cc7623d0bd34f5a2342be6f5aae951aa))





# [2.0.0-beta.2](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-beta.1...@editfish/extension-code-block@2.0.0-beta.2) (2021-04-02)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-beta.1](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.11...@editfish/extension-code-block@2.0.0-beta.1) (2021-03-05)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.11](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.10...@editfish/extension-code-block@2.0.0-alpha.11) (2021-02-16)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.10](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.9...@editfish/extension-code-block@2.0.0-alpha.10) (2021-02-07)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.9](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.8...@editfish/extension-code-block@2.0.0-alpha.9) (2021-02-05)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.8](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.7...@editfish/extension-code-block@2.0.0-alpha.8) (2021-01-29)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.7](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.6...@editfish/extension-code-block@2.0.0-alpha.7) (2021-01-29)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.6](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.5...@editfish/extension-code-block@2.0.0-alpha.6) (2021-01-28)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.5](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.4...@editfish/extension-code-block@2.0.0-alpha.5) (2020-12-18)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.4](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.3...@editfish/extension-code-block@2.0.0-alpha.4) (2020-12-02)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.3](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.2...@editfish/extension-code-block@2.0.0-alpha.3) (2020-11-19)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.2](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@2.0.0-alpha.1...@editfish/extension-code-block@2.0.0-alpha.2) (2020-11-19)

**Note:** Version bump only for package @editfish/extension-code-block





# [2.0.0-alpha.1](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@1.0.0-alpha.2...@editfish/extension-code-block@2.0.0-alpha.1) (2020-11-18)

**Note:** Version bump only for package @editfish/extension-code-block





# [1.0.0-alpha.2](https://github.com/ueberdosis/tiptap/compare/@editfish/extension-code-block@1.0.0-alpha.1...@editfish/extension-code-block@1.0.0-alpha.2) (2020-11-16)

**Note:** Version bump only for package @editfish/extension-code-block





# 1.0.0-alpha.1 (2020-11-16)


### Reverts

* Revert "use global namespace" ([0c9ce26](https://github.com/ueberdosis/tiptap/commit/0c9ce26c02c07d88a757c01b0a9d7f9e2b0b7502))
