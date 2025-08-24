# Module Federation Usage

## Quick Setup

### Local Development (Default)
```bash
npm install
npx nx serve single-page-app  # Port 4200
```

### Remote Module Federation

1. **Configure environment**:
```bash
cp env.example .env
```

2. **Edit `.env` for Module2 remote**:
```env
VITE_MODULE1_IS_REMOTE=false
VITE_MODULE2_IS_REMOTE=true
VITE_MODULE2_REMOTE_NAME=Module2
VITE_MODULE2_REMOTE_ENTRY=http://localhost:4202/module-2-entry.js
```

3. **Run both servers**:
```bash
# Terminal 1: Module2 as remote
npx nx serve module-2  # Port 4202

# Terminal 2: Main app (Module1 local + Module2 remote)
npx nx serve single-page-app  # Port 4200
```

**Result**: Module1 loads statically, Module2 loads via Module Federation.

## Module Build and Preview

```bash
# Build modules for federation
npx nx build module-1
npx nx build module-2

# Preview modules with federation
npx nx preview module-1  # Port 4301
npx nx preview module-2  # Port 4302

# After preview, run the main app with correct env
npx nx serve single-page-app  # Port 4200
```

## Use Cases

### 1. Scalable Projects
**For**: Startups/products that may grow large
- Independent teams per module
- Independent deployments
- Technology flexibility
- Performance optimization

### 2. Legacy Migration
**For**: Gradual monolith modernization
- Incremental migration
- Risk reduction
- Technology coexistence
- Quick ROI
