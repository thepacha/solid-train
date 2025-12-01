# GitHub & Vercel Setup Guide

This guide will help you upload your project to GitHub and deploy it to Vercel.

## Step 1: Install Git (if not already installed)

If Git is not installed on your system:

1. Download Git from: https://git-scm.com/download/win
2. Run the installer with default settings
3. Restart your terminal/PowerShell after installation

Or use winget (if available):
```powershell
winget install --id Git.Git -e --source winget
```

## Step 2: Initialize Git Repository

Open PowerShell in this directory and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Revu QA AI app"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `revu-qa-ai`)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL (e.g., `https://github.com/yourusername/revu-qa-ai.git`)

## Step 4: Connect and Push to GitHub

```powershell
# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/revu-qa-ai.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

If prompted for credentials:
- Use a Personal Access Token (not your password)
- Create one at: https://github.com/settings/tokens
- Select scope: `repo`

## Step 5: Deploy to Vercel

### Option A: Via Vercel Dashboard

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Add environment variable: `GEMINI_API_KEY` (your API key)
7. Click "Deploy"

### Option B: Via Vercel CLI

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

## Environment Variables

Make sure to set `VITE_GEMINI_API_KEY` in:
- Local: `.env.local` file (already in .gitignore)
  ```
  VITE_GEMINI_API_KEY=your_api_key_here
  ```
- Vercel: Project Settings → Environment Variables
  - Variable name: `VITE_GEMINI_API_KEY`
  - Value: Your Gemini API key

## Vercel Configuration

Vercel should auto-detect your Vite app. If needed, it will use:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

**Note**: Your `.env.local` file is already in `.gitignore` and won't be uploaded to GitHub for security.

