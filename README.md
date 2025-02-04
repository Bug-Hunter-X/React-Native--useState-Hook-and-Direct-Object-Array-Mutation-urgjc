# React Native useState Hook: Direct Object/Array Mutation

This repository demonstrates a common error in React Native when using the `useState` hook with objects or arrays. Directly mutating these values doesn't trigger a re-render, leading to unexpected behavior.

## Problem
The `bug.js` file shows how directly modifying an object or array within a state update function doesn't work as expected.  React's `useState` relies on detecting changes in the *reference* of the state object.  Direct mutation keeps the reference the same, so React doesn't trigger a re-render. 

## Solution
The `bugSolution.js` file demonstrates the correct approach using the spread operator (...) or other techniques to create a *new* object or array, ensuring React detects the change in reference and re-renders the component.

## How to Run
1. Clone this repo.
2. `npm install`
3. `npx react-native run-android` (or `npx react-native run-ios`)
