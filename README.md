# Project Documentation

## Translation Controllers

### 1. `getAll`
- Retrieves all translations from the database.
- Returns translations in JSON format with IDs, messages, and translations in different languages.

### 2. `findByLang`
- Retrieves translations in a specified language.
- Returns translations in JSON format with messages associated with translations in the specified language.

### 3. `search`
- Searches translations for a specified message.
- Returns matching translations in JSON format with IDs, messages, and translations in different languages.

### 4. `create`
- Creates or updates translations in a specified language.
- Returns the created or updated translation in JSON format.

### 5. `update`
- Updates translations for a specified language.
- Returns the updated translation in JSON format.

## User Controllers

### 1. `getMe`
- Retrieves user information based on the provided user ID.
- Returns user data including a token and login information.

### 2. `login`
- Logs in a user based on provided credentials.
- Returns a token and username upon successful login.

### 3. `updateUser`
- Updates user information based on provided data.
- Returns a message indicating success or failure of the update, along with updated user data if successful.

