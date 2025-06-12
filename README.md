# Login Page Project

This project is a full-stack login page application with a **React frontend** and a **.NET backend**.

## Project Structure

- **frontend/** — React app (Create React App)
- **backend/** — .NET backend API

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/TecLogos/LoginPage.git
cd LoginPage
```

---

## Frontend

The frontend is built with [Create React App](https://github.com/facebook/create-react-app).

### To start the frontend:

```sh
cd frontend
npm install
npm start
```

- The React app will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Backend

The backend is a .NET project.

### To start the backend:

```sh
cd backend
dotnet restore
dotnet run
```

- By default, the backend runs on [http://localhost:5000](http://localhost:5000) (or as configured in `appsettings.json`).

---

## Usage

1. Start the backend server first.
2. Then start the frontend React app.
3. The frontend will communicate with the backend API for authentication and login features.

---

## Configuration

- You can change the backend port in `backend/appsettings.json`.
- Update the frontend API URLs if you change the backend port.

---

## License

This project is licensed under the MIT License.