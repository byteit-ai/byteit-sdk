#!/usr/bin/env bash
# Validate a manual release request and print its metadata for GitHub Actions.
#
# Usage: release_meta.sh <requested version> <version in VERSION> <latest commit title>
# Writes version=, tag= and notes_file= to $GITHUB_OUTPUT. Fails when the
# requested version differs from VERSION, the latest commit is not
# `chore(release): <version>`, the tag already exists, or CHANGELOG.md has no
# dated section for the version.
set -euo pipefail

version="$1"
declared_version="$2"
title="$3"

if [[ ! "$version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "::error::Version must be X.Y.Z, got '$version'"
  exit 1
fi

if [ "$version" != "$declared_version" ]; then
  echo "::error::Requested $version but VERSION declares $declared_version"
  exit 1
fi

if [ "$title" != "chore(release): $version" ]; then
  echo "::error::The latest commit on main must be 'chore(release): $version', got '$title'"
  exit 1
fi

git fetch --tags --quiet origin
for tag in "v$version" "go/v$version"; do
  if git rev-parse -q --verify "refs/tags/$tag" >/dev/null; then
    echo "::error::Tag $tag already exists; versions are immutable"
    exit 1
  fi
done

if ! grep -Eq "^## \[$version\] - [0-9]{4}-[0-9]{2}-[0-9]{2}$" CHANGELOG.md; then
  echo "::error::CHANGELOG.md needs a dated '## [$version] - YYYY-MM-DD' section"
  exit 1
fi

# Notes cover every version since the last published one, so a version that
# was never published still has its changes announced.
previous="$(git tag --list 'v*' --sort=-v:refname | head -n 1)"
previous="${previous#v}"
notes_file="$(mktemp)"
awk -v header="## [$version]" -v previous="## [$previous]" -v has_previous="${previous:+1}" '
  index($0, header) == 1 { found = 1; next }
  found && has_previous && index($0, previous) == 1 { exit }
  found && !has_previous && /^## \[/ { exit }
  found { print }
' CHANGELOG.md > "$notes_file"

{
  echo "version=$version"
  echo "tag=v$version"
  echo "notes_file=$notes_file"
} >> "$GITHUB_OUTPUT"
