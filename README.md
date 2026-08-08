# Not-To-Do List API 🚫📝

A simple REST API for a "Not To Do" list app — track the things you're consciously choosing *not* to do. This is the backend piece of an ongoing full-stack build.

> ⚠️ Work in progress. Currently uses an in-memory array as a fake DB (no persistent database yet).

## Tech Stack

- [Express](https://expressjs.com/) — web framework
- [Morgan](https://www.npmjs.com/package/morgan) — HTTP request logger
- Node.js (ES Modules)

## Project Structure

```
.
├── server.js                     # App entry point
├── src/
│   └── routers/
│       └── taskRouters.js        # Task routes & logic
├── rest.http                     # Sample requests (REST Client)
└── yarn.lock
```

## Getting Started

### Prerequisites
- Node.js installed
- Yarn (or npm)

### Installation

```bash
git clone <your-repo-url>
cd <repo-folder>
yarn install
```

### Run the server

```bash
node server.js
```

The server will start at:

```
http://localhost:8000
```

## API Reference

Base URL: `http://localhost:8000/api/v1/tasks`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`    | `/` | Get all tasks |
| `POST`   | `/` | Add a new task |
| `PATCH`  | `/` | Update a task's `type` by `id` |
| `DELETE` | `/:id` | Delete a task by `id` |

### GET `/api/v1/tasks`
Returns the current list of tasks.

**Response**
```json
{
  "status": "success",
  "message": "Here are the task List",
  "task": [
    { "id": 1, "task": "Coding", "hr": 20, "type": "entry" }
  ]
}
```

### POST `/api/v1/tasks`
Adds a new task to the list.

**Request body**
```json
{
  "id": "3",
  "task": "Cooking",
  "hr": 20
}
```

**Response**
```json
{
  "status": "success",
  "message": "New Task Added"
}
```

### PATCH `/api/v1/tasks`
Updates the `type` field of a task matching the given `id`.

**Request body**
```json
{
  "id": 2,
  "type": "bad"
}
```

**Response**
```json
{
  "status": "success",
  "message": "Your task has been updated",
  "task": [ /* updated list */ ]
}
```

### DELETE `/api/v1/tasks/:id`
Deletes a task by its `id`.

**Example**
```
DELETE /api/v1/tasks/3
```

**Response**
```json
{
  "status": "success",
  "message": "Your task has been deleted"
}
```

## Testing the API

A ready-to-use [`rest.http`](./rest.http) file is included with sample requests for all endpoints. Open it in VS Code with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension to try things out quickly.

## Roadmap

- [ ] Replace in-memory fake DB with a real database (MongoDB/PostgreSQL)
- [ ] Add request validation
- [ ] Add proper error handling middleware
- [ ] Add authentication
- [ ] Connect to frontend
- [ ] Write tests

## Author

Built as part of an ongoing full-stack learning project. More features coming soon 🚀
