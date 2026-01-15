# Password Management Quick Reference

## Quick Start

### Set Password (First Time)
```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local and set your password
# VITE_LOGIN_PASSWORD=your_password_here

# Restart dev server
npm run dev
```

## Change Password

### Development
1. Edit `.env.local`
2. Change `VITE_LOGIN_PASSWORD=new_password`
3. Restart server: `npm run dev`

### Production
1. Update environment variable in hosting platform
2. Redeploy application

## Files

| File | Purpose | Git |
|------|---------|-----|
| `.env.example` | Template | ✅ Committed |
| `.env.local` | Your password | ❌ Git-ignored |
| `.gitignore` | Excludes .env.local | ✅ Committed |

## Default Password
- **Development default**: `123`
- **Production**: Must set `VITE_LOGIN_PASSWORD`

## Security Checklist
- [ ] Created `.env.local` file
- [ ] Set strong password
- [ ] Restarted dev server
- [ ] Confirmed `.env.local` is in `.gitignore`
- [ ] Never commit password to git
- [ ] Use different passwords for dev/prod

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Password not working | Restart dev server |
| Forgot password | Edit `.env.local`, set new password |
| Can't login after change | Clear browser localStorage |
| File not found | Create `.env.local` from `.env.example` |

## Password Sharing Best Practices
- ✅ Use encrypted messaging
- ✅ Use password managers
- ✅ Share verbally if in person
- ❌ Don't email passwords
- ❌ Don't post in Slack/Teams
- ❌ Don't commit to git
