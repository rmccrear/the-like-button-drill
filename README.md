# Like Button Refactoring in Next.js 14 - A Step-by-Step Guide

## Overview

See the musical video for this repository [The Like Button Drill](https://youtu.be/92VByOqLwp0).

There are two branches in this repository: `main` and `stub`. The `main` branch contains the complete code for the project, while the `stub` branch contains the initial setup with basic components. You can follow the step-by-step guide below to create and refactor a like button feature in a card component.

In this repository, you'll learn how to create a like button feature within a card component, then refactor it to improve code clarity, reusability, and maintainability. We'll begin with building the card and incrementally improve it by extracting the like button functionality, lifting state, and optimizing the code.

### Prerequisites
- Basic knowledge of React and Next.js.
- Understanding of component-based architecture.
- Familiarity with state and props in React.

## Steps to Create and Refactor a Like Button on a Card

### 1. Create the Card with a Like Button

Start by building a simple card component that includes some basic content and a like button. The like button should maintain a counter of how many times it has been clicked.

**Sample Code:**

```jsx
import React, { useState } from 'react';

function Card() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>Some content for the card...</p>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
}

export default Card;
```

- Use local state in the card (`useState`) to track the number of likes.
- Add an event handler (`handleLike`) to increment the like count when the button is clicked.

### 2. Identify the Problem

As the project grows, the `Card` component becomes cluttered. The `like` functionality is tightly coupled with the rest of the card, making it difficult to maintain or reuse in other components.

State management and event handling are intertwined, suggesting the need to refactor for modularity and clarity.

### 3. Refactor the Like Button into Its Own Component

To make the code more modular and reusable, extract the like button into its own separate component.

**Steps to Refactor:**
- Create a new component named `LikeCatButton.js`.
- Move the `likes` and `handleLike` logic to this new component.
- Pass `likes` and `onLike` as props from `Card` to `LikeCatButton`.

**Like Button Code:**

```jsx
import React from 'react';

function LikeCatButton({ likes, onLike }) {
  return (
    <button onClick={onLike}>Like ({likes})</button>
  );
}

export default LikeButton;
```

- The `Card` component should now import `LikeCatButton` and render it.
- The code is cleaner, and the like button is easier to manage independently.

### 4. Prop Drilling from Root to Card

To allow for shared state across multiple cards, lift the state up to a root component.

**Steps to Lift State:**
- Move the `useState` for likes into the root component (`App.js`).
- Pass `likes` and `handleLike` down to `Card`, and then to `LikeCatButton`.

**Final Result Sample Code:**

```jsx
// Card Component
import React, { useState } from 'react';
import LikeButton from './LikeButton';

function CatCard({ likes, onLike }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>Some content for the card...</p>
      <LikeButton likes={likes} onLike={onLike} />
    </div>
  );
}

// Like Button Component
function LikeCatButton({ likes, onLike }) {
  return (
    <button onClick={onLike}>Like ({likes})</button>
  );
}

```

### 5. Test and Optimize

- Test the `LikeButton` to make sure it works properly, both as an independent component and when integrated into the `Card`.
- Make sure the refactored code is easier to understand and maintain.
- Use tools like React Developer Tools to verify prop drilling and state handling.

## Summary
By following these steps, we have:
- Created a `Card` component with a like button.
- Identified issues with cluttered code and tightly coupled state management.
- Extracted the `LikeButton` into a separate component for better reusability.
- Lifted state to the root component and used prop drilling to manage shared state effectively.
- Tested the solution to ensure it is clean, maintainable, and scalable.

## Additional Notes
- The refactoring process makes components reusable and the app architecture easier to extend.
- This repository is built with Next.js 14, so use features like server components if applicable, and remember to use the power of modular components for a scalable design.
- You will need a valid API key for https://api-ninjas.com/ to run the project.

## Running the Project
1. Clone the repository.
2. Install dependencies: `npm install`
3. Copy the `.env.example` file to `.env.local` and add a valid API key for https://api-ninjas.com/ to the `.env.local` file.
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) to see your application.

Happy Coding! 🚀
