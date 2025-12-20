# Texas Roadhouse Headless - Project Structure

## 📁 Directory Organization

```
📦 Texas Roadhouse Headless/
├── 📂 app/                          # Next.js 13+ App Router
│   ├── 📂 (site)/                   # Route group for main site
│   │   ├── 📂 meal-planner/         # Meal planner feature
│   │   ├── 📂 menus-prices/         # Menu and pricing pages
│   │   ├── 📂 store-locator/        # Store location finder
│   │   └── ...                      # Other site pages
│   ├── 📂 api/                      # API routes
│   ├── 📂 components/               # Reusable React components
│   │   ├── 📂 meal-planner/         # Meal planner components
│   │   ├── 📂 seo/                  # SEO components
│   │   └── ...                      # Other component categories
│   ├── 📂 data/                     # Static data files
│   └── 📂 lib/                      # Utility libraries and helpers
├── 📂 assets/                       # Project assets
│   └── 📂 images/                   # Image assets
├── 📂 config/                       # Configuration files
│   ├── 📄 next.config.pages-router.js
│   ├── 📄 postcss.config.js
│   └── 📄 tailwind.config.js
├── 📂 docs/                         # Documentation
│   ├── 📂 archived/                 # Archived documentation
│   ├── 📂 guides/                   # Setup and usage guides
│   └── 📂 setup/                    # Setup documentation
├── 📂 lib/                          # Shared libraries (project root)
│   └── 📄 menuApi.ts                # Menu data API abstraction
├── 📂 public/                       # Static public assets
│   ├── 📂 menu/                     # Menu item images
│   └── 📄 menu-fallback.json        # Fallback menu data
├── 📂 scripts/                      # Build and utility scripts
│   └── 📂 utilities/                # Utility scripts and tools
└── 📂 backup/                       # Backup files (auto-generated)
```

## 🎯 Key Directories Explained

### `/app` - Next.js App Router
- **`(site)/`**: Route group for main website pages
- **`api/`**: Server-side API endpoints
- **`components/`**: Reusable React components organized by feature
- **`data/`**: Static JSON data files
- **`lib/`**: App-specific utilities and helpers

### `/config` - Configuration Files
- **`tailwind.config.js`**: Tailwind CSS configuration
- **`postcss.config.js`**: PostCSS configuration
- **`next.config.pages-router.js`**: Legacy Pages Router config

### `/docs` - Documentation
- **`guides/`**: Step-by-step setup guides
- **`setup/`**: Technical setup documentation
- **`archived/`**: Older documentation for reference

### `/lib` - Shared Libraries
- **`menuApi.ts`**: Menu data abstraction layer
- Other shared utilities and helpers

### `/scripts` - Automation & Utilities
- **`utilities/`**: Utility scripts for maintenance
- Build scripts and automation tools

### `/public` - Static Assets
- **`menu/`**: Menu item images (WebP format)
- **`menu-fallback.json`**: Local fallback menu data
- Other static assets (icons, logos, etc.)

## 🔧 Configuration Files (Root Level)

| File | Purpose |
|------|---------|
| `next.config.js` | Main Next.js configuration |
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `vercel.json` | Vercel deployment settings |
| `.env.local` | Environment variables (local) |
| `README.md` | Project overview and setup |

## 🚀 Development Workflow

1. **Main development**: Work in `/app` directory
2. **Components**: Create in `/app/components/[feature]/`
3. **API endpoints**: Add to `/app/api/`
4. **Documentation**: Update in `/docs/`
5. **Utilities**: Add scripts to `/scripts/utilities/`
6. **Configuration**: Modify files in `/config/` or root level

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `MealPlannerClient.tsx`)
- **Pages**: lowercase with hyphens (e.g., `meal-planner/`)
- **Utilities**: camelCase (e.g., `menuApi.ts`)
- **Config**: lowercase with dots (e.g., `next.config.js`)
- **Documentation**: UPPERCASE with underscores (e.g., `PROJECT_STRUCTURE.md`)

## 🎨 Styling Organization

- **Global styles**: `/app/globals.css`
- **Component styles**: CSS Modules (`.module.css`)
- **Configuration**: `/config/tailwind.config.js`
- **Theme**: Defined in Tailwind config with Texas Roadhouse brand colors

## 🔍 Path Mapping

TypeScript path mapping is configured in `tsconfig.json`:
- `@/*` → `./app/*` (App Router files)
- `@/lib/*` → `./lib/*` (Shared libraries)

This allows clean imports like:
```typescript
import { getMenuItems } from '@/lib/menuApi'
import Component from '@/components/ui/Button'
```

## 🚀 Deployment Structure

The project is optimized for Vercel deployment with:
- Automatic builds from `main` branch
- Environment variables managed in Vercel dashboard
- Static assets served from `/public`
- API routes deployed as serverless functions


