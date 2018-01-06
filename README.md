# Trade House

> A broadcasting platform for selling goods.

## Table of Contents

1. [Requirements](#requirements)
2. [Installing Dependencies](#installing-dependencies)
3. [Team](#team)
4. [Contributing](#contributing)
5. [Additional Info](#additional-info)

## Requirements / Recommended

- Node 8.9.3
- Java 8
- Elastic Search 6.1.0
- MySQL

### Installing Dependencies

From within the root directory:

```sh
npm install
```

To install Elasticsearch on Debian-based Linux systems:

```sh
sudo apt-get install apt-transport-https
echo "deb https://artifacts.elastic.co/packages/6.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.x.list
sudo apt-get update && sudo apt-get install elasticsearch
```

Determine whether your system uses init or systemd:

```sh
ps -p 1
```

To start and stop Elasticsearch with init:
```sh
sudo -i service elasticsearch start
sudo -i service elasticsearch stop
```

To start and stop Elasticsearch with systemd:
```sh
sudo systemctl start elasticsearch.service
sudo systemctl stop elasticsearch.service
```

Finally, run from the root directory

```sh
npm run be-start
```

and visit http://localhost:5421/ in the browser.

## Team

  - __Product Owner__: Anton Shtylman
  - __Scrum Master__: Chucky Bennett
  - __Development Team Members__: Jon Tang, Brian Leung

## Contributing

This project uses the Airbnb style guide. See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Additional Info

Merchants can submit their embedded stream URLs through YouTube, Twitch or other services. e.g. https://www.youtube.com/embed/live_stream?channel=UCu3pDheBV5chOddcuOSqTnw or https://player.twitch.tv/?channel=datjoncat&muted=true
