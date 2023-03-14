# Swiggy-Mock-API

A Node.js web server that fetches data from a third-party (Swiggy) API and exposes it to a client app.

## Tech Stack

**Server:** Node, Express

## API Reference

#### List all restaurants for the given location (lat & lng)

```http
  GET /api/restaurants/list
```

| Query Parameter | Type     | Description             |
| :-------------- | :------- | ----------------------- |    
| `lat`           | `string` | **Required**. latitude  |
| `lng`           | `string` | **Required**. longitude |

Example URL
```http
https://swiggy-api.onrender.com/api/restaurants/list?lat=28.52572220267605&lng=77.39057801663876&page_type=DESKTOP_WEB_LISTING
```
#### List menu items at location (lat & lng) for the given restaurant by menuId

```http
  GET /api/restaurants/menu
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `lat`     | `string` | **Required**. location latitude    |
| `lng`     | `string` | **Required**. location longitude   |
| `menuId`  | `number` | **Required**. menuId of restaurant |

Example URL
```http
https://swiggy-api.onrender.com/api/restaurants/menu?lat=28.52572220267605&lng=77.39057801663876&menuId=245
```

#### Get search suggestions by query string at location (lat & lng)

```http
  GET /api/restaurants/search/suggest
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `lat`     | `string` | **Required**. location latitude    |
| `lng`     | `string` | **Required**. location longitude   |
| `str`     | `string` | **Required**. search string        |


Example URL
```http
https://swiggy-api.onrender.com/api/restaurants/search/suggest?lat=28.5770877&lng=77.3417748&str=food
```

## Usage/Examples

In react app, you can hit the APIs like mentioned below

```javascript
const response = fetch(`https://swiggy-api.onrender.com/api/restaurants/menu?lat=${latitude}&lng=${longitude}&menuId=${menuId}`)

const data = await response.json();
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Pushpendra-Sharma/swiggy-api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

