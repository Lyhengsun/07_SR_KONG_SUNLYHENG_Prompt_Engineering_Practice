# Todo List App

A modern, responsive todo list application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ **Add Tasks**: Create new tasks with title and optional description
- ✏️ **Edit Tasks**: Modify existing tasks through a detailed view modal
- 🗑️ **Delete Tasks**: Remove tasks with confirmation
- 👁️ **View Task Details**: See full task information in a modal
- ✅ **Mark Complete**: Toggle task completion status
- 🔍 **Filter Tasks**: View all, active, or completed tasks
- 💾 **Persistent Storage**: Tasks are saved to localStorage
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Storage**: localStorage for persistence

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── AddTask.tsx          # Task creation form
│   ├── FilterButtons.tsx    # Filter controls
│   ├── TaskDetail.tsx       # Task detail modal
│   ├── TaskItem.tsx         # Individual task component
│   └── TaskList.tsx         # Task list container
├── types/
│   └── task.ts              # TypeScript interfaces
└── ...
```

## Usage

1. **Adding Tasks**: Type in the input field and click "Add Task" or press Enter
2. **Adding Descriptions**: Click "More" to expand the form and add a description
3. **Completing Tasks**: Click the checkbox next to any task
4. **Viewing Details**: Click the eye icon to open the task detail modal
5. **Editing Tasks**: Open task details and click "Edit Task"
6. **Deleting Tasks**: Click the trash icon and confirm deletion
7. **Filtering**: Use the filter buttons to view All, Active, or Completed tasks

## Features in Detail

### Task Management
- Each task has a unique ID, title, description, completion status, and timestamps
- Tasks are automatically saved to localStorage
- Real-time updates across all components

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Smooth animations and hover effects
- Accessible color contrast and keyboard navigation

### Data Persistence
- All tasks are automatically saved to localStorage
- Data persists between browser sessions
- Graceful error handling for corrupted data

## License

MIT License - feel free to use this project for learning or as a starting point for your own applications.
# 07_SR_KONG_SUNLYHENG_Prompt_Engineering_Practice
