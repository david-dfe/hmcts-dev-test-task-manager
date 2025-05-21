
# 🧠 Task Management Application

A full-stack task management system built with:

- **Ruby on Rails (API only)** – `http://localhost:3000`
- **React Frontend** – `http://localhost:3001`
- **Swagger UI** for API documentation

---

## 🚀 Features

- View all tasks
- Connects to a Rails API backend
- API documentation powered by Swagger

---

## 📦 Tech Stack

- **Frontend:** React (React App)
- **Backend:** Ruby on Rails (API mode)
- **API Docs:** Swagger UI via rswag

---

## 🛠️ Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/david-dfe/hmcts-dev-test-task-manager

```
You should see a mono-repo with two projects, dev-test-api and dev-test-frontend
---

## 🔧 Backend Setup (Rails API - Port 3000)

1. Navigate to the `dev-test-api` folder (or where your Rails backend lives):

   ```bash
   cd dev-test-api
   ```

2. Install dependencies:

   ```bash
   bundle install
   ```

3. Set up the database:

   ```bash
   rails db:create db:migrate db:seed
   ```
   this will create the database as well as some sample data seeded in

4. Start the Rails server:

   ```bash
   rails server
   ```

5. Visit the API at: `http://localhost:3000`

### 🔍 Swagger Docs

Once the Rails server is running:

- View API docs at:
  **`http://localhost:3000/api-docs`**

---

## 🎨 Frontend Setup (React - Port 3001)

1. Navigate to the frontend directory:

   ```bash
   cd dev-test-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. View the app at:
   **`http://localhost:3001`**

---

## 🔗 API Connection

The frontend fetches tasks from the backend at:
**`http://localhost:3000/api/v1/tasks`**

Make sure the backend is running when using the frontend.

---

## 🧪 Running Tests

```bash
cd dev-test-api
bundle exec rspec
```

Test files are located in:

```
spec/integration/tasks_spec.rb
```


---

## 📄 License

MIT

---

## 🙌 Credits

Built by David Feetenby
