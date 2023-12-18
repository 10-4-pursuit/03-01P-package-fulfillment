# Module 03 Project 01 Package Fulfillment

## Intro

This project, part of Pursuit's third module, showcases my skills in React by developing a Single Page Application for Package Management. The application implements CRUD operations (Create, Read, Update, Delete) to manage package data. Additionally, I employ the @faker-js/faker node package to generate fake data, particularly for creating unique fake IDs for new resources.

## Getting Started

1. `npm install`
2. `npx create-react-app .`
3. `npm install @faker-js/faker --save-dev`

## Building out Components for Package Management 

### App Component
- `Purpose:` Serves as the root component of the Package Management App, orchestrating the overall functionality.

- `State Management:` Uses the `useState` hook to manage the list of packages, providing a foundational state for CRUD operations.

- `Key Functions:`
    - *`addPackage:`* Adds a new package entry.
    - *`editPackage:`* Updates details of an existing package.
    - *`deletePackage:`* Removes a package from the list.

- `Child Components:` Incorporates `PackageForm` for adding/editing packages and `PackageList` for displaying the package list.

### PackageForm Component

- `Initialization:` The `PackageForm` function is initialized with `addPackage`, `editPackage`, `packageSelected`, and `id` as parameters.

- `Functionality:`
    - `Add Package:` If `addPackage` is provided, it is called with the new package data, adding the new entry to the existing package list. This implementation is in `App.js`.
    - `Edit Package:` If `editPackage` is provided, it updates the selected package with the new data. This implementation is also in `App.js`.
    - `Form State Management:` Manages the form fields' state and handles changes to ensure data consistency when adding or editing packages. 

- `Form Submission:` Handles form submission events, preventing default behavior and either adding a new package or updating an existing one.

### PackageItem Component

- `Initialization:` The `PackageItem` function starts by destructuring its props into `packageSelected`, `editPackage`, and `deletePackage`.

- Features:
    - Package Selection: Destructures and displays details from the packageSelected object.
    - Edit Functionality: editPackage provides an interface to edit the selected package details.
    - Delete Functionality: deletePackage includes a delete option to remove the package from the list.

- `Edit Mode:` Utilizes a local state to toggle between display and edit modes for a package.

### PackageList Component

- `Role:` Displays the list of packages on the page.

- `Functionality:` Maps through the `packages` array passed via props, rendering each package using the `PackageItem` component.

- `Conditional Rendering:` Shows a message when no packages are present, ensuring a user-friendly interface.

