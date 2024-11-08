![📖 Dungeons & Dragons Book Image](https://i.imgur.com/qdjuwD9.png)

# 🐉 Dungeons & Dragons API

Welcome to the **Dungeons & Dragons** project repository for **ISEN C.O.O.**! ✨

## 🚀 Getting Started

To get started, clone this repository: 🖥️

```bash
git clone https://github.com/AlexandreFigard/coo-tp-DnD
```

Then, install the dependencies: 📦

```bash
npm install
```

Finally, start the development server: 🕹️

```bash
npm start
```

## Notes

To change the default port (**3000**), copy `.env.dist` rename it to `.env` and adjust the port setting.

## ⚔️ Features

- 🛠️ **Character creation**
- 📜 Retrieve informations for **Character Creation**

# 📚 API Endpoints

### 1. Create a Character 🎨

- **Method**: `POST`
- **URL**: `/api/characters`
- **Description**: Creates a new character.

**Required JSON Parameters**:

| Parameter    | Type   | Required | Description                        |
| ------------ | ------ | -------- | ---------------------------------- |
| `name`       | string | Yes      | Character Name                     |
| `species`    | string | Yes      | Character Species                  |
| `classType`  | string | Yes      | Character Class Type               |
| `alignment`  | string | Yes      | Character Alignment                |
| `picture`    | string | Yes      | Character Image                    |
| `campaignId` | string | No       | Campaign Id link to this character |

### 2. Get All Classes 🧙

- **Method**: `GET`
- **URL**: `/api/classes`
- **Description**: Returns all classes in raw data from [DnD 5e API](https://5e-bits.github.io/docs/).

### 3. Get Class Details 🧙📚

- **Method**: `GET`
- **URL**: `/api/classes/:index`
- **Description**: Returns detailed information about a specific class by its `index`.
- **Note**: The `index` should match the class name in lowercase as it appears in the array of classes.

## 🧑‍🤝‍🧑 Contributors

- [Alexandre FIGARD](https://github.com/AlexandreFigard)
- [Mathéo BOULOGNE](https://github.com/Shiyro)
- [Mathieu BEDEZ](https://github.com/mbedez)
- [Baptiste LEMATTRE](https://github.com/Baptistelemattre)
