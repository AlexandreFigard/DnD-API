![Dungeons & Dragons Book Image](https://i.imgur.com/qdjuwD9.png)

# Dungeons & Dragons

This repository contains the API for the Dungeons & Dragons project for ISEN C.O.O.

## Getting Started

To get started, clone this repository to your local machine:

```bash
git clone https://github.com/AlexandreFigard/coo-tp-DnD
```

Then, install the dependencies:

```bash
npm install
```

Finally, start the development server:

```bash
npm start
```

## Features

- Character creation
- Retreive character information for creation

# Endpoints

### 1. Create a Character

- **Method**: `POST`
- **URL**: `/api/characters`
- **Description**: Creates a new character.

**Required JSON Parameters**:

- `name` (string, required)
- `species` (string, required)
- `classType` (string, required)
- `alignment` (string, optional)
- `picture` (string, required, URL)
- `campaignId` (string, optional)

### 2. Get All Classes (Raw Data)

- **Method**: `GET`
- **URL**: `/api/classes`
- **Description**: Returns all classes (raw data).

### 3. Get Class Details

- **Method**: `GET`
- **URL**: `/api/classes/:index`
- **Description**: Returns the details of a class by its `index`.
- **Notes**: The `index` is the name of the class in the array of classes in lowercase.

## Members

- [Alexandre FIGARD](https://github.com/AlexandreFigard)
- [Mathéo BOULOGNE](https://github.com/Shiyro)
- [Mathieu BEDEZ](https://github.com/mbedez)
- [Bastiste LEMATTRE](https://github.com/Baptistelemattre)
