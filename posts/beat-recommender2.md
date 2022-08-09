---
title: 'Creating a Song Recommendation Web App using Next.js, Spotify API, and React'
date: '2022-08-09'
summary: 'In this post, I share my experience of creating a song recommendation web app using Next.js, SpoitfyAPI, and React'
featured: 'yes'
---

# Beat Recommender 2 - song recommender web app using Spotify API 

**Beat Recommender 2** is a song recommendation web application created using Next.js, React, Tailwind CSS, and Spotify API.

# Table of Contents

 1. Introduction
 2. Technologies
 3. Setup
 4. Features
 5. Upcoming Features

## Introduction

**Beat Recommender 2** is a song recommendation web application created using Next.js, React, Tailwind CSS, and Spotify API. I wanted to update my beat-recommender project using Spotify API that I created with Create React App with the new technology I have learned so I worked on this project. 
Referred to these awesome guides to learn about the use of Spotify API and Next.js. 

https://qiita.com/Yuki_Oshima/items/82116e4044687b16ef60
https://dev.to/j471n/how-to-use-spotify-api-with-nextjs-50o5

## Technologies
This project is created with, 
 - Next.js: "12.2.4"
 - React: "18.2.0""
 - React-DOM: "18.2.0",
 - Tailwind CSS: "^3.1.8",
 
## Setup

To try this project, go to 
https://beat-recommender2.vercel.app/

## Features
Following are the things that I have worked on and learned through working on this project. 

### Authentication using Authorization Code Flow and use of serverless api functions to handle keys to access third-party api's
Learned how the Authorization Code Flow works and how it requires a server for this structure (you don't want to expose your keys in the frontend) because of the use of symmetric keys such as client id and client secret keys. Also, learned how to do this using serverless api functions in Next.js. I learned how to use Next.js serverless api's to use keys (environmental variables saved on the server) to access third-party api's.

### Learned about session storage and use of different storage
Also, learned how to use sessions to save information that you don't want to show on the frontend (like access tokens on the server). 
These are some storage knowledge that I learned working on this project.
Client (non-private) - cookies (easy, quick, small, lasting until clear cookies), localstorage(easy, quick, large, lasting until clear cache) 
Server (private) - session (based on sessions, lasting until tab closed), files (small, until the server is unaccessible), database (large, until the server is unaccessible)

### Tailwind css
First time I used Tailwind css in my project. It took a while to get use to it but learned how it helps prototyping quickly. 
So cool that you can just write css as classes! 

### Deployment to Vercel 
I used Vercel to deploy and host this Next.js app. 

## Upcoming Features
 - Custom Hooks
    Write custom hooks to call the serverless api functions to fetch information from third-parties with updates using useSWR. 
    
 - Global State Management
    Use of Context API or Redux to manage global state such as user information. 
    
 - Re-collecting the access token using refresh tokens
    Write the logic to use refresh tokens when the access token expires. 
    
 - Improve user experience
    Make sure that errors can be shown when there is a problem using try catch and showing those errors in error messages.
    Add validation to the selected favorite artists and genres (e.g. show error when there is more than 5 selected). 
    
