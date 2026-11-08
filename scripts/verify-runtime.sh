#!/usr/bin/env bash
set -euo pipefail
image="${1:?Supply the locally built runtime image}"
container="personal-website-smoke-$$"
cleanup() { docker rm -f "$container" >/dev/null 2>&1 || true; }
trap cleanup EXIT
# No published ports, persistent mounts, application secrets or outbound network.
docker run --detach --name "$container" --network none \
  --memory 128m --cpus 0.5 --pids-limit 128 "$image" >/dev/null
docker exec "$container" nginx -t
for attempt in 1 2 3 4 5; do
  if docker exec "$container" sh -ec \
    'wget -qO- http://127.0.0.1/ | grep -q "<div id=\"root\"></div>"'; then
    printf 'Static runtime smoke passed without publishing ports.\n'
    exit 0
  fi
  sleep 1
done
printf 'Static runtime smoke failed.\n' >&2
exit 1
