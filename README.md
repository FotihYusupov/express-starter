### Usage with Documentation

#### Translations Endpoints

1. **Get All Translations**
   - **Description:** Retrieves all translations stored in the database.
   - **Endpoint:** `GET /translations`
   - **Controller Function:** `translationController.getAll`

2. **Find Translation by Language**
   - **Description:** Retrieves translations for a specific language.
   - **Endpoint:** `GET /translations/:lang`
   - **Controller Function:** `translationController.findByLang`
   - **Parameters:** 
     - `lang` (string): Language code (e.g., `en`, `ru`, `uz`, `kr`).

3. **Search Translations**
   - **Description:** Searches translations by message content.
   - **Endpoint:** `GET /translations/search/:message`
   - **Controller Function:** `translationController.search`
   - **Parameters:** 
     - `message` (string): Message content to search for.

4. **Create or Update Translation**
   - **Description:** Create or update a translation for a specific language.
   - **Endpoint:** `POST /translations/:lang`
   - **Controller Function:** `translationController.create`
   - **Parameters:** 
     - `lang` (string): Language code (e.g., `en`, `ru`, `uz`, `kr`).
   - **Request Body:** 
     ```json
     {
       "message": "Your message here",
       "text": "Your translation here"
     }
     ```

5. **Update Translation**
   - **Description:** Update an existing translation.
   - **Endpoint:** `PUT /translations/:id`
   - **Controller Function:** `translationController.update`
   - **Parameters:** 
     - `id` (string): ID of the translation to update.
   - **Request Body:** 
     ```json
     {
       "lang": "en",
       "translation": "Updated translation text"
     }
     ```

#### User Endpoints

1. **Get User Information**
   - **Description:** Retrieves user information based on the provided token.
   - **Endpoint:** `GET /get-me`
   - **Middleware:** `authMiddleware`
   - **Controller Function:** `userController.getMe`

2. **User Login**
   - **Description:** Logs in a user with the provided username and password.
   - **Endpoint:** `POST /login`
   - **Controller Function:** `userController.login`

3. **Update User Information**
   - **Description:** Updates user information such as username and password.
   - **Endpoint:** `PUT /update-user`
   - **Middleware:** `authMiddleware`
   - **Controller Function:** `userController.updateUser`

### How to Use

1. Make sure you have Node.js and npm installed on your system.

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
