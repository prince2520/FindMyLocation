<p align="center" >
   <img  align=center  width="15%" src="https://github.com/prince2520/FindMyLocation/assets/68547999/4008acec-a93c-451d-af7f-4b2989d3e69d">
</p>

<p align="center">
   Discover Your World with Precision - Find My Location Chrome Extension
</p>

</br>


## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

## Environment variable

Add environment file (.env) in your root directory: 

```bash
PLASMO_PUBLIC_IPINFO=TOKEN //Add your own token from  https://ipinfo.io/
PLASMO_PUBLIC_IPADDRESS=https://api.ipify.org?format=json
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!

## Screenshot
<p align="center" >
   <img  align=center  width="50%" src="https://github.com/prince2520/FindMyLocation/assets/68547999/a6dd65dd-bd6c-44ad-af58-8ebdbe0957a2">
</p>

## Technologies Used
* [React](https://react.dev/)
* [Iconify](https://iconify.design/)
* [Lottie Files](https://lottiefiles.com/)
* [Plasmo Framework](https://docs.plasmo.com/framework)


## Demo
[Youtube](https://youtu.be/Xfecvnx_fig?si=dkjA76fAeianMm6I)

https://github.com/prince2520/FindMyLocation/assets/68547999/5e8beedc-0ad0-465e-afdb-abe39a69e3db



