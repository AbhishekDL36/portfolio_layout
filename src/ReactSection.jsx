
import React from 'react';

export default function ReactSection() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 overflow-auto">
      <h1 className="text-4xl font-bold text-center mb-8">What I Know</h1>
      <ul className="list-disc space-y-4 text-lg">
        {/* Core Concepts */}
        <li>JSX Syntax</li>
        <li>Single Page Applications (SPA) and Virtual DOM</li>
        <li>Functional vs Class Components</li>
        <li>Component Lifecycle (Class-based Components)</li>
        <li>State Management in Components (Class vs Functional)</li>

        {/* Styling */}
        <li>Styling in React (Inline, Modular, External)</li>
      

        {/* Props & State */}
        <li>Props (Passing Data between Parent & Child)</li>
        <li>State Management with useState & useReducer</li>
        <li>Why We Use Fragments (for grouping elements)</li>

        {/* Hooks */}
        <li>Hooks in Functional Components:</li>
        <ul className="ml-8 space-y-2">
          <li>useState (State in Functional Components)</li>
          <li>useEffect (Handling Side Effects)</li>
          <li>useRef (Accessing DOM Elements & Persisting Values)</li>
          <li>useContext (Avoiding Prop Drilling)</li>
          <li>useMemo & useCallback (Optimizing Re-renders)</li>
          <li>React.memo (Memoizing Functional Components)</li>
        </ul>

        {/* Routing */}
        <li>React Router (Navigation in SPAs)</li>

        {/* Advanced Topics */}
        <li>Context API for Global State Management</li>
        <li>Higher Order Components (HOCs)</li>
        <li>React Performance Optimization Techniques</li>
      </ul>
    </div>
  );
}
