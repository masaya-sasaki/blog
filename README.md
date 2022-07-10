# Web3 Dev Blog - blog/portfolio app

**Web3 Dev Blog** is a simple blog/portfolio app created using Next.js.

# Table of Contents

 1. Introduction
 2. Technologies
 3. Setup
 4. Future Features 

## Introduction

**Web3 Dev Blog** is a simple blog/portfolio app created using Next.js, React.js, CSS modules, React Icons, Remark, and Grey Matter. I wanted to showcase my skills in Next.js + SSG (Static Site Generation) and also make something meaningful using React, so I decided to work on this web3 dev blog/portfolio app. I extended part of Next.js's tutorial and developed the blog feature. It was my first time designing everything from scratch and writing custom React components so it was very challenging but rewarding as well. I also had the opportunity to design the logo using Canva which is used as a favicon and in the header component. The links in the header runs smoothly using smooth scroll with client side navigation while the links to the projects and posts pages are linked to statically generated pages in build time using Next.js's static site generation. 

## Technologies
This project is created with, 
 - Next.js: "12.1.6"
 - React: "18.2.0""
 - React-DOM: "18.2.0",
 - React-icons: "^4.4.0",
 - Remark: "^14.0.2",
 - Remark-html: "^15.0.1"
 - Gray-matter: "^4.0.3"
 - Date-fns: "^2.28.0"

## Setup

To run this project locally, install it using npm: 
```
$ cd ./blog
$ npm install
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Future Features: 
Header
    For the header, try and use useState and useEffect to keep track of the movement of scroll and then 
    show and hide the navigation header based on whether the position of scroll is at the top or when the user has scrolled upward.         