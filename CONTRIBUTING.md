# Contributing

The SDKs in this repository are generated from the ByteIt API definition, so
pull requests that edit the code here cannot be merged: the next release would
overwrite them.

- **Found a bug or a missing feature?** Open an issue with a minimal example.
  We fix it at the source and ship it in the next release.
- **Security issue?** Do not open a public issue. See [SECURITY.md](SECURITY.md).

Each release is one `chore(release): X.Y.Z` commit on `main`, tagged `vX.Y.Z`
when it is published. See [CHANGELOG.md](CHANGELOG.md) for what changed and
[ENDPOINTS.md](ENDPOINTS.md) for every operation the SDKs expose; each language
directory has its own CHANGELOG.md and ENDPOINTS.md too.
