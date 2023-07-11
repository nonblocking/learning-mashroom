# Learning Mashroom Lesson 6

Video: https://youtu.be/cWUrT_yC2SA

## Usage

## Start the portal

    cd portal
    npm i
    npm start

Portal will be available at http://localhost:8080

## Start the Remote Microfrontend

    cd microfrontend1
    npm i
    npm run dev

After the Microfrontend is registered (check http://localhost:8080/mashroom/admin/ext/remote-portal-apps)
you can drop it onto any page.

## Deploy the Microfrontend on the demo K8S Platform

Clone https://github.com/nonblocking/microfrontend-platform-kubernetes and follow the setup guide for k3d there.

If the platform is running:

    cd microfrontend1
    ./kubernetes/build-and-deploy.sh

Open the Portal running on the platform on http://localhost:30082 and login as admin/admin.
The Microfrontend should appear in the Admin UI at http://localhost:30082/mashroom/admin/ext/remote-portal-apps-k8s
and can be added to any Portal page.
