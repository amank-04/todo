# To-Do App

## Overview
This personal project is a modern to-do app designed to explore advanced web development tools and techniques. It features a dynamic and user-friendly interface, seamless task updates, and optimized performance. The app integrates secure task storage and enhanced user interaction to deliver a smooth and engaging experience.

## Features
- **Frontend**:
  - Built with **React** for a dynamic and responsive user interface.
  - **Redux** for efficient and predictable state management.

- **Performance**:
  - Optimized using **Next.js** for server-side rendering and fast loading times.

- **UI Development**:
  - Styled with **Tailwind CSS** for rapid and consistent design.

- **Backend**:
  - Secure and scalable task storage provided by **Appwrite** (Backend-as-a-Service).

- **User Interaction**:
  - Drag-and-drop functionality for intuitive task management.

## Technologies Used
### Frontend
- React
- Redux
- Next.js
- Tailwind CSS

### Backend
- Appwrite

## Installation and Setup
### Prerequisites
- Node.js
- Appwrite instance (self-hosted or cloud-hosted)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/amank-04/todo.git
   cd todo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following variables:
     ```env
     NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
     NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-appwrite-project-id
     NEXT_PUBLIC_APPWRITE_API_KEY=your-appwrite-api-key
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

## Usage
- Add tasks to your to-do list.
- Drag and drop tasks to reorganize them.
- Edit or delete tasks as needed.

## Future Enhancements
- Add user authentication for personalized task lists.
- Implement task sharing with other users.
- Introduce notifications and reminders for pending tasks.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)

