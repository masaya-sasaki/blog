---
title: 'Creating a KickStarter DApp using Solidity, Hardhat, and Next.js'
date: '2022-07-31'
summary: 'In this post, I talk about the process of creating a DApp using Solidity, Hardhat, and Next.js'
featured: 'yes'
---
# Kick Starter DApp
Since I want to become a DApp(Decentralized Application) Developer (Web3 Developer), I have been working on side projects to create DApps. I heard good things about this Udemy course to get the basics of smart contract development so I am sharing my lessons learned!

## Intro
Recently, I worked on a Kickstarter DApp based on Stephen Grider’s Udemy course.

In this course, we create a KickStarter DApp (Decentralized Application) - kickstarter is a crowdfunding web application where people can create campaigns to raise funding by calling for contributors.

As Grider says, one of the problem with kickstarter is that there isn’t a mechanism for contributors to keep the people who raised funding accountable. This DApp tries to solve that problem through adding a mechanism where the person who creates a campaign (manager) needs to create requests to transfer money from the campaign funds and they can only finalize those requests when at least half of the contributors approve the request. And this mechanism will be guaranteed through a smart contract and that is what makes this web application a decentralized application.

  ## Lessons Learned
I learned a lot from this course!!
Usually, creating a decentralized application (smart contract application) is done by these three steps. Thus, I will describe this process in steps as well.

1. Write smart contracts

2. Deploy and test smart contracts

3. Write a frontend that allows users to interact with the smart contract


The code for 1. and 2. is 
https://github.com/masaya-sasaki/kickstart-dapp

and the code for 3. is 
https://github.com/masaya-sasaki/kickstart-dapp-client
  ### 1. Write Smart Contracts

The first step is writing a smart contract for the application. Since Ethereum is one of the biggest smart contract platform, we will be using Ethereum and it’s smart contract programming language Solidity.

Before we start talking about how to write smart contract, let’s go through a quick overview of what a smart contract is. An often used metaphor is a vending machine. A vending machine is a machine that has ways to interact (function) such as enter money, press button for the drink you want, and then that drinks come out as well as stocks of drinks (state) that change depending on the function and actions by the owner. It is a machine that can autonomously execute a transaction, receive money for the chosen button and return a drink, reliably. Writing a smart contract is similar to this process and, in that sense, writing a smart contract seams to be basically deciding two things about a smart contract: state variables and functions. In our example, the Kickstarter smart contract will have these following state variables and functions.


After these are decided, the next step is writing this contract. Solidity is a pretty simple language that looks similar to javascript and there are few gotchas like security (once deployed, the smart contract will live on the blockchain forever!!) and gas costs but let’s go and review some.

A solidity script starts from writing the license, specifying the version of solidity you are using to be compiled, and then you start writing

contract Campaign {

}

Basically, you write the solidity in the contract, so you can think of solidity as encapsulated in the contract and by writing solidity you basically write how the state and API’s that define how programs outside of the contract communicate with the contract.

In the example of vending machines, you are writing the inner logics of what happens when user presses a button with sufficient money and what the user can see before and during that process.

  

To do that, in the beginning of the contract you write the state variables where you can also define things called structs that is a data type that you can customize. Then after you declare state variables you can write a constructor function.

Below this you also write modifiers, which are like conditional statements using require(); _; . This is basically a prefix that you can add before the function statement which will run before calling the function statement and make sure the function is executed only when the condition in the modifier is met.

An often used use case is onlyOwner() that only allows the owner of the contract to call this function.

A constructor function is called once when the smart contract is deployed and instantiated on a blockchain. You usually set up the initial state variables using this function.

Below the constructor functions, you can start writing functions. In solidity, you write the data type and name of the parameters and return values and add stuff like public, private, internal, and external pure view to specify the accessibility of functions.

In the function statement, there are certain global variables that you can use such as msg, this, and such but we won’t go into details here. You will get use to this as you write more contracts and refer to the solidity document.

  

  ### 2. Deploy and test smart contracts

The second step is to deploy and test smart contracts. Deploying a smart contract to a blockchain is basically writing code to communicate to a node in a blockchain that you want to create a new smart contract.

In order to communicate with a blockchain node, you have to talk to an ethereum node in its language, which is JSON-RPC. While it is very complicated to do that, ethers.js allows you to abstract this process and you can program the communication using javascript.

So here you will use ethers.js. How does ethers.js work then?

In Hardhat, you can call the following function

getContractFactory to create an abstract factory for a contract that you have written and compiled

Then, you can create an instance of this contract by deploying it to the hardhat test network which is a local blockchain that hardhat creates that we can use to deploy and test our contracts.

Call deploy to the object generated from getContractFactory and you will be able to deploy the contract to hardhat test network. The deploy() will return an address of where the smart contract will be deployed on the test network.

By calling ethers to getSigners, you can get signers that are connected to the getContractFactory.

  

In order to test smart contracts in Hardhat, you can use chai and mocha.

Using describe(), you can group test suites and it() you can write tests.

There is a useful thing called loadFixture() where you can pre-calculate a state of the test network and set the blockchain to the same state before running every test which is similar to how you setup tests to start from the same initial state.

  

In smart contract development, it is important to test your code very well because once you deploy a smart contract to the blockchain it is immutable and, if there are security risks, you won’t be able to change it.

That is why there are services such as smart contract audits which are important to deploy a secure smart contract.

  

In order to deploy the written smart contract to the testnet of your choice,

You can modify the hardhat.config.js to setup access to a node provider (Alchemy or Infura) and setting up the api key and the network you want to deploy to.

you can run hardhat run scripts/“name of your deploy script” —network “name of the network e.g. goerli”

Make sure you return your contract address so that you can check your deployed contract on etherscan!

  

  ### 3. Writing a frontend for interacting with the smart contract

The third step after writing, testing, and deploying the smart contract to a blockchain is to create a frontend which acts as a easy interface for users to interact with the deployed smart contract.

Here, we will be using React and Next.js to create a simple user interface. React is a UI library in Javascript that allows you to write User Interface in Components. While there is a learning curve to learning React,

It is very performant (because it uses the virtual DOM), maintainable (because you can write components and combine them to create a user interface), and quick (there is a huge open-source ecosystem that allows you to use different UI libraries to achieve what you want.)

Next.js is a server side framework that helps you write React and do things like server side rendering, routing, and more that you can’t just do with React. One of the problems with React is that an often used way to write React such as CRA is based

on client side rendering. The problem with client side rendering is SEO, increased load time, and you can’t access server side features. For example, in our example, we will be making the website adaptable to users who do not have

Metamask installed in their browser. And we will be utilizing Next’s server side rendering feature to accomplish this.

 
Here we will be using semantic UI to get help with rapid development using pre-made and customizable components.

After writing React to create the layout of the User Interface (which will be omitted because it is simple React and it is out of the scope of this article)

  

Fetching Data

getInitialPropa and getServersideProps are similar in that it conducts data fetching in run time on the server side.

However, the difference is that getInitialProps will run on the server for the initial load but when the page transitions, it will run on the client side which will cause problems when this data fetching is required on the backend.

getInitialProps is deprecated so it is recommended to use getServersideProps.

  

Communicating with smart contracts on Ethereum

As mentioned in the ethers.js official doc(https://docs.ethers.io/v5/getting-started/#getting-started--glossary), there are three main concepts that needs to be understood about ethers.js.

First is Provider, which is “a class which provides an abstraction for a connection to the Ethereum Network. It provides read-only access to the Blockchain and its status.” Basically a provider provides read-only access to a blockchain.

So you will use provider when you just want to read from the blockchain and it’s state. This will be used when we will be trying to read from the blockchain.

Second is the Signer, which is “in some way directly or indirectly has access to a private key, which can sign messages and transactions to authorize the network to charge your account ether to perform operations.” Basically a signer

allows you to sign (use of private key to confirm a transaction that makes state changes to a blockchain), write (make state changes) to the blockchain.

Thirdly, is the Contract object, which is “an abstraction which represents a connection to a specific contract on the Ethereum Network, so that applications can use it like a normal JavaScript object.” Basically, you can use a Contract

Object as the actual contract that you are connected to as an object. In order to create a new Contract object to interact with the smart contract, you will need the address of the contract, an ABI (Application Binary Interface) which

specify “what methods are available and how to encode and decode the data”, and a provider or signer depending on whether you want to just read from the contract or also write to the contract.

Connecting these two together we will be writing functions on

getServerSideProps to pre-fetch data from the blockchain (read from the blockchain) by using a Contract object created with a provider on the server side

And write event handlers to get access to the user’s wallet on the client side to create a signer and a contract object to make transactions (write to the blockchain)