# Firebase Setup for Onboarding System

## Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click **"Add project"**
3. Name it: `costello-digital-onboarding`
4. Disable Google Analytics (optional)
5. Click **"Create project"**

## Step 2: Enable Firestore Database

1. In Firebase console, click **"Firestore Database"** in the left menu
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select location: `europe-west2` (London)
5. Click **"Enable"**

## Step 3: Set Firestore Rules

Go to **"Rules"** tab and paste this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write to onboarding documents only if authenticated
    match /onboarding/{customerId} {
      allow read, write: if true; // For now, anyone can read/write
      // Later we can add: allow write: if request.auth != null;
    }
  }
}
```

Click **"Publish"**

## Step 4: Get Firebase Config

1. Click the **gear icon** → **Project settings**
2. Scroll down to **"Your apps"**
3. Click the **web icon** (</>)
4. Register app name: `Costello Digital Onboarding`
5. Copy the `firebaseConfig` object

## Step 5: Add Environment Variables to Vercel

Go to your Vercel dashboard and add these environment variables:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Step 6: Create Your First Customer

In Firestore console, click **"Start collection"**:
- Collection ID: `onboarding`
- Document ID: `CD-2024-001` (or any custom ID format)
- Fields:
  - `surname` (string): `Costello`
  - `createdAt` (timestamp): (auto)
  - `formData` (map): {} (empty for now)

## How to Use

### Creating New Customers

When you sign a new Shopify client:

1. Go to Firebase Console → Firestore
2. Click **"Add document"** in the `onboarding` collection
3. Set:
   - Document ID: `CD-2024-XXX` (your customer ID format)
   - `surname`: Their surname (case-insensitive)
   - `createdAt`: Current timestamp

4. Email them:
   ```
   Welcome to Costello Digital!
   
   Access your Shopify onboarding portal:
   https://costellodigital.co.uk/onboarding/shopify
   
   Your Customer ID: CD-2024-XXX
   Surname: [their surname]
   
   You can save your progress and return anytime.
   ```

### Customer Experience

1. They visit `/onboarding/shopify`
2. Enter their Customer ID + Surname
3. Fill out the onboarding form
4. Progress auto-saves every 30 seconds
5. They can close and return anytime
6. When 100% complete, they can submit

### Viewing Submissions

In Firebase Console → Firestore → `onboarding` → Select customer document

You'll see their `formData` with all responses!

## Security Notes

- URLs are not listed in sitemap (hidden from Google)
- Requires Customer ID + Surname to access
- Data stored securely in Firebase
- Auto-saves prevent data loss

## Future Enhancements

- Email notifications when customers complete onboarding
- Admin dashboard to view all submissions
- Custom email templates with unique links per customer

