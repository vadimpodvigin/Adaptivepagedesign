# Login & Password Management Guide

## Overview
The CoreIgnite application includes a secure login system with password protection. This guide explains how to set up, manage, and change passwords safely.

## Security Approach

### Environment Variables
The password is stored in environment variables, NOT hardcoded in the application code. This prevents:
- Password exposure in source code
- Accidental commits of sensitive data to version control
- Password leakage in public repositories

### How It Works
1. Password is stored in `.env.local` file (git-ignored)
2. Application reads password from `VITE_LOGIN_PASSWORD` environment variable
3. If no password is set, defaults to `123` (for development)
4. Authentication state is persisted in browser's localStorage

## Initial Setup

### Step 1: Create Environment File
Copy the example environment file:
```bash
cp .env.example .env.local
```

### Step 2: Set Your Password
Edit `.env.local` and change the password:
```env
VITE_LOGIN_PASSWORD=your_secure_password_here
```

### Step 3: Restart Development Server
After changing the password, restart your development server:
```bash
npm run dev
```

## Changing the Password

### For Development
1. Stop the development server
2. Edit `.env.local`
3. Change `VITE_LOGIN_PASSWORD` to your new password
4. Save the file
5. Restart the development server

### For Production
1. Update the environment variable in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **AWS/Azure/GCP**: Update via their respective consoles
2. Redeploy your application

## Security Best Practices

### ✅ DO
- Store password in `.env.local` file
- Use strong, unique passwords
- Share passwords securely (encrypted channels, password managers)
- Rotate passwords regularly
- Use different passwords for development and production
- Keep `.env.local` file out of version control

### ❌ DON'T
- Hardcode passwords in source code
- Commit `.env.local` to git
- Share passwords in plain text (email, Slack, etc.)
- Use weak or default passwords in production
- Share the same password across multiple environments

## File Structure

```
project/
├── .env.example          # Template file (committed to git)
├── .env.local           # Your actual password (git-ignored)
├── .gitignore           # Ensures .env.local is not committed
└── docs/
    └── LOGIN_SETUP.md   # This guide
```

## Troubleshooting

### Password Not Working
1. Check that `.env.local` exists
2. Verify the password is correct (no extra spaces)
3. Restart the development server
4. Clear browser localStorage and try again

### Forgot Password
1. Stop the development server
2. Edit `.env.local` and set a new password
3. Restart the development server
4. Clear browser localStorage (or use incognito mode)
5. Log in with the new password

### Can't Find .env.local
1. Make sure you created it from `.env.example`
2. Check that it's in the root directory
3. It won't appear if your file explorer hides dotfiles

## Technical Details

### Environment Variable Prefix
Vite requires environment variables to be prefixed with `VITE_` to be exposed to the client-side code.

### Default Password
If `VITE_LOGIN_PASSWORD` is not set, the application defaults to `123` for convenience during development. **Never deploy to production without setting a strong password.**

### Authentication Flow
1. User enters password on login page
2. Password is compared with `VITE_LOGIN_PASSWORD`
3. On success, `coreIgniteAuth` flag is set in localStorage
4. User is redirected to the main application
5. On logout, localStorage is cleared and user returns to login page

## Production Deployment

### Environment Variables in Hosting Platforms

#### Vercel
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add `VITE_LOGIN_PASSWORD` with your production password
4. Deploy or redeploy your application

#### Netlify
1. Site Settings → Build & Deploy
2. Environment → Environment Variables
3. Add `VITE_LOGIN_PASSWORD`
4. Trigger a new deployment

#### Other Platforms
Consult your hosting platform's documentation for setting environment variables.

## Important Notes

⚠️ **This is a frontend-only authentication system**
- It provides basic access control
- Not suitable for highly sensitive data
- Password is checked client-side
- For production apps with sensitive data, implement backend authentication

⚠️ **Password Storage**
- The password itself is not encrypted in `.env.local`
- Ensure `.env.local` has appropriate file permissions
- Never commit this file to version control

## Contact

For password reset requests or access issues, contact your CoreIgnite team administrator.
