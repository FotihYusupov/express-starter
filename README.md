****Controllers****

**User Controllers**

1. The `getMe` function:
- Retrieves the `userId` from the request headers.
- Finds a user by the `userId` using the `Users` model.
- If the user is not found, it returns a JSON response with a 404 status and a message "User Not Found!".
- If the user is found, it returns a JSON response with the user's token (generated using the `sign` function), and the user's login information.

2. The `login` function:
- Finds a user by the `username` and `password` provided in the request body using the `Users` model.
- If the user is not found, it returns a JSON response with a 404 status and a message "User Not Found!".
- If the user is found, it returns a JSON response with the user's token (generated using the `sign` function), and the user's username.

3. The `updateUser` function:
- Retrieves the `userId` from the request headers.
- Updates the user's information (username and password) based on the request body using the `Users` model.
- If the user is updated successfully, it returns a JSON response with a message "User updated" and the updated user data.
- If the user is not found, it returns a JSON response with a 404 status and a message "User not found!"

**Translation Controllers**

1. **getAll**: This function retrieves all translations from the database and returns them in a JSON response. It maps each translation object to include specific language translations (uz, ru, en, kr) or null if the translation does not exist in that language.

2. **findByLang**: This function takes a language parameter from the request, retrieves all translations from the database, creates an object where the message is the key and the translation in the specified language is the value. It then returns an array containing this object in a JSON response.

3. **search**: This function takes a message parameter from the request, creates a case-insensitive regex pattern, searches for translations in the database that match the message, and returns them in a JSON response similar to the **getAll** function.

4. **create**: This function creates a new translation in the specified language. It extracts the language and text from the request body, checks if a translation with the same message already exists, and either creates a new translation or updates the existing one with the new text.

5. **update**: This function updates an existing translation in the specified language. It takes the translation ID, language, and new translation text from the request body, finds the translation by ID, updates the translation in the specified language, and saves the changes.
