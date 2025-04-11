## React Rerender

To run the project:

```
npm install
npm run dev
```

## Key Points

- Re-rendering is a **FEATURE**
- Focus on **slow renders** before optimizing un-necessary ones
- Be cautious with **objects, arrays, and functions** in dependency arrays
- ContextProvider component

## Element Optimization

To prevent an element from re-rendering, consider these options:

- move the element outside of the component.
- lift it to a parent component with fewer renders.
- use `React.useMemo` or `React.memo`
- pass data via context. The idea is that we can move component somewhere else.

## Optimize Context

The way that context works is that whenever the provided value changes from one render to another, it triggers a re-render of all the consuming components (which will re-render whether or not they're memoized).

To optimize the Context:

- memorize the Context value with `React.useMemo`
- use Provider component
- split context: one context for value, one for setter

## Tools

- [React Scan](https://react-scan.com/)
- [React Profiler](https://react.dev/reference/react/Profiler)
