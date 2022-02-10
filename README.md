# Introducing GEMV

This is the website framework for people who really love the HTML/CSS/JS stack, but hate its security vulnerabilities, and also (for some reason) hate Web Frameworks. You can read more about it in my blog post on my website, [here](https://mosallaei.me/posts/introducting-gemv/).

## Get Started

Getting started with a GEMV project is quite easy. 

- Fork this repo (or click the "Use Template" button at the top)
- Clone it onto your system.
  - Make sure you have NodeJS on your system.
- Run `npm i` to install all dependencies.
- Run `npm run start` to open the server on `localhost:3000`.

### What comes out-of-the-box

With this template, you instantly get access to:

- TailwindCSS
  - With PostCSS and Auto-Prefixer
- An Express server that you can host an API on quickly.
- A Grunt workflow, that obfuscates all JS files that are served to the client side.
- A really simple project structure, with native TypeScript support.

### What *doesn't* come out-of-the-box?

~~A lot~~. In my blog post, I wrote about how this project is very rough, and I don't consider pursuing it much further unless people actually want to see GEMV be turned into a framework. 

- Although GEMV has the M for MongoDB, MongoDB is not installed with the project.
- There is no dev server. With each change, you need to run `npm run start`. Thankfully it doesn't take long to build.

These two might not seem that big, but they are the biggest downsides that I would consider if I was a developer looking at this project. Hey, if you want to add these two features, add a pull request. 

## Project Structure

`public` - Where all files are built and sent to. You should only edit the HTML files. All other files are compiled. 

`scripts` - This is where you will create JS files, that will get obfuscated by Grunt and sent to the `public` directory.

`styles` - You can add your custom CSS files that will get built by PostCSS and sent to the `public` directory.
