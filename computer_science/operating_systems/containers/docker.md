# Docker

### use `docker compose` instead of `docker-compose`

Configure docker-compose as a Docker plugin so you can use docker compose as a command instead of the legacy docker-compose script. First, create a folder in your home directory to hold Docker CLI plugins:

```
mkdir -p ~/.docker/cli-plugins
```

Then symlink the docker-compose command into that new folder:

```
ln -sfn $(brew --prefix)/opt/docker-compose/bin/docker-compose ~/.docker/cli-plugins/docker-compose
```

## Tutorials

- [A Docker Tutorial for Beginners](https://docker-curriculum.com/)

## Resources


