What is SecondBrain? 🤔
SecondBrain is a full-stack knowledge management tool designed to:
Serve as a digital memory extension
Help users capture valuable resources (articles, videos, documentation)
Organize knowledge contextually with tags
Make information retrieval effortless through search
Maintain persistent, secure user data



Backend Architecture:

Built with Express.js framework.
Provides REST API endpoints for user authentication (signup, signin), content management, brain sharing, and integration with Google Gemini GenAI API.
Uses JWT for user authentication and middleware for protecting routes.
Uses MongoDB models (UserModel, ContentModel, LinkModel) for data persistence.
Uses environment variables for configuration, including GEMINI_API_KEY for AI integration.
Listens on port 3000.


Frontend Architecture:

Built as a React single-page application (SPA).
Uses React Router for client-side routing with pages such as Index, SignIn, SignUp, Dashboard, and NotFound.
Uses React Query for data fetching and state management.
Uses custom UI components like Toaster and TooltipProvider for UI feedback and tooltips.
Built and bundled using Vite with Tailwind CSS for styling.
