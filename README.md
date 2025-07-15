# CV Genius AI

This is a Next.js application built with Firebase and Genkit that helps users tailor their CV and cover letter for job applications using AI.

## Getting Started

Follow these instructions to get the project running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A [Firebase Project](https://console.firebase.google.com/)

### 1. Install Dependencies

First, navigate to the project directory and install the necessary npm packages.

```bash
npm install
```

### 2. Set Up Environment Variables

This project requires credentials from your Firebase project to connect to Firebase Authentication and Firestore.

1.  **Create a `.env` file** in the root of the project by copying the example:
    ```bash
    cp .env.example .env
    ```
2.  **Get Your Firebase Web App Credentials:**
    - Go to your Firebase project in the console.
    - Click the gear icon > **Project settings**.
    - In the "Your apps" section, select your web app.
    - Click on **Config** to find your `firebaseConfig` values.
3.  **Populate `.env`:** Open the `.env` file and fill in the `NEXT_PUBLIC_` variables with the values from your `firebaseConfig`.

4.  **Get Your Firebase Admin SDK Service Account:**
    - In your Firebase project settings, go to the **Service accounts** tab.
    - Click **Generate new private key**. A JSON file will be downloaded.
    - **Important:** Keep this file secure and do not commit it to your repository.
    - Open the downloaded JSON file and copy its entire content.
    - **Base64 Encode the JSON**: You need to encode the JSON content as a Base64 string. You can use an online tool or a command-line utility:
        ```bash
        # For macOS/Linux
        base64 -i /path/to/your/serviceAccountKey.json
        ```
    - Copy the resulting Base64 string and paste it as the value for `FIREBASE_ADMIN_SERVICE_ACCOUNT_BASE64` in your `.env` file.

### 3. Running the Development Servers

This project requires two separate terminal sessions to run concurrently.

**Terminal 1: Start the Genkit AI Server**

This server manages the AI flows (e.g., tailoring the CV).

```bash
npm run genkit:dev
```

**Terminal 2: Start the Next.js Application**

This is the main web application server.

```bash
npm run dev
```

### 4. Open the Application

Once both servers are running, open your browser and navigate to [http://localhost:9002](http://localhost:9002) to see the application in action.

You can log in as an admin using `admin@admin.com` to access the `/admin` dashboard. Any other email will be treated as a regular user.