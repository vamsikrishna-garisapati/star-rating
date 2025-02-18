# ⭐Star Rating Component

This is a **React-based Star Rating Component** that allows users to rate something by clicking on stars. It dynamically updates the rating based on user interaction, providing a smooth and intuitive user experience with hover and click effects.

## Features

- **5 clickable stars**: Users can click on any of the 5 stars to rate.
- **Highlighting**: Clicking a star highlights that star and all previous ones, making it easy to adjust the rating.
- **Rating Change**: Users can change their rating by clicking a different star.
- **Rating Display**: The selected rating is displayed below the stars (e.g., **"3/5 Rating"**).
- **Hover Effect**: Users can hover over the stars to preview their rating before clicking.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **useState**: React Hook for managing component state.
- **onMouseEnter**: Event handler for the hover effect.
- **CSS** or **FontAwesome**: Used for styling the stars.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/vamsikrishna-garisapati/star-rating.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd star-rating-component
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

   This will run the app locally at [http://localhost:3000](http://localhost:3000).

## How It Works

1. **Dynamic Star Rendering**: The stars are dynamically generated using JavaScript's `.map()` function over an array of 5 elements.
2. **State Management**: The selected rating is managed with the `useState` hook.
3. **Hover Effect**: Hovering over the stars highlights them, giving users a preview of their rating.
4. **Click Event**: Clicking a star sets the rating, highlighting that star and all previous ones.

## Example Usage

Here’s how you can use the `StarRating` component in your own React application:

```jsx
import React from 'react';
import StarRating from './StarRating';

function App() {
  return (
    <div className="App">
      <h1>Rate Your Experience</h1>
      <StarRating />
    </div>
  );
}

export default App;
```

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. Contributions, issues, and suggestions are always welcome!

