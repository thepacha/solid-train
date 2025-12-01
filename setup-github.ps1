# GitHub Setup Script for Revu QA AI
# Run this script after Git is installed

Write-Host "🚀 Setting up GitHub repository..." -ForegroundColor Cyan

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Or run: winget install --id Git.Git -e --source winget" -ForegroundColor Yellow
    exit 1
}

# Check if already a git repository
if (Test-Path .git) {
    Write-Host "⚠️  Git repository already initialized" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne "y") {
        exit 0
    }
} else {
    # Initialize git repository
    Write-Host "📦 Initializing git repository..." -ForegroundColor Cyan
    git init
}

# Add all files
Write-Host "📝 Adding files to git..." -ForegroundColor Cyan
git add .

# Create initial commit
Write-Host "💾 Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Revu QA AI app"

Write-Host "`n✅ Git repository initialized successfully!" -ForegroundColor Green
Write-Host "`n📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub: https://github.com/new" -ForegroundColor White
Write-Host "2. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host "3. Copy your repository URL (e.g., https://github.com/username/repo-name.git)" -ForegroundColor White
Write-Host "4. Run the following commands:" -ForegroundColor White
Write-Host "   git remote add origin <YOUR_REPO_URL>" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host "`n💡 Tip: Use a Personal Access Token for authentication (not password)" -ForegroundColor Cyan
Write-Host "   Create one at: https://github.com/settings/tokens" -ForegroundColor Cyan

