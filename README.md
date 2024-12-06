# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by an incorrectly used `useEffect` hook.

## Bug Description

The `MyComponent` function uses the `useEffect` hook to update the `count` state.  However, the `count` state is included in the dependency array.  This creates a loop where the `useEffect` hook continuously updates the `count` state, causing the component to re-render infinitely.

## Bug Solution

The solution is to remove the `count` state from the dependency array.  This will only cause the `useEffect` hook to run once after the initial render.