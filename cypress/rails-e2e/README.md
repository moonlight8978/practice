# Cypress meets Compose

- Use cypress prebuilt image
  https://github.com/cypress-io/cypress-docker-images

- Use X11 for Cypress GUI
  - Cypress container needs xvfb, x11 client
  - Host need x11 server
  - Share x11 socket on Host with container
    `/tmp/.X11-unix:/tmp/.X11-unix`
  - Add docker to allowed host list
    `xhost +local:docker`
