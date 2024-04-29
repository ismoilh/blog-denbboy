# BLOG

## Table of Contents

1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Starting the Infrastructure](#starting-the-infrastructure)
    - [Starting the Server](#starting-the-server)
2. [Accessing Swagger Documentation](#accessing-swagger-documentation)
3. [TO DO](#to-do)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

## Getting Started

### Prerequisites

List of prerequisites needed to run project

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

### Installation

Step-by-step instructions on how to install your project.

1. Clone the repository:
   ```bash
   git clone https://github.com/ismoilh/blog-denbboy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-denbboy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Starting the Infrastructure

1. Script for generating env, starting docker-compose and running migrations
   ```bash
   npm run start:infra
   ```
   If the generate-env.sh script fails to execute or throws an error, you may need to give it executable rights using the following command:
   ```bash
   chmod +x ./local/generate-env.sh
   ```

### Starting the Server

1. To start the server, use the following command:

   ```bash
   npm run start:dev
   ```


### Accessing Swagger Documentation

1. Navigate to the Swagger documentation URL:
   ```
   http://localhost:{REST_API_PORT}/docs#/
   ```
   Replace `${REST_API_PORT}` with the port where your REST API is running from .env file.

2. When prompted for authentication, enter the username and password configured in your `.env` file under the `BASIC_AUTH_USERS` variable.
   
   For example, if your `.env` file contains the following: 
   ```
   BASIC_AUTH_USERS=user1:password1,user2:password2
   ```
   You can use `user1` as the username and `password1` as the password to authenticate and access the Swagger documentation.
   By providing the username and password from your `.env` file, you can securely access the Swagger documentation and explore the API endpoints.




### TO DO

- [ ] Move database logic to separate module (dal)
- [ ] Upgrade database architecture
- [ ] Add authentication
- [ ] If needed divide modules to microservices
- [ ] Add Custom error handler
- [ ] Add Custom logger module
- [ ] Cover project with tests