# Here

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

> **Module Federation**: See [MODULE_FEDERATION.md](./MODULE_FEDERATION.md) for usage examples.

## Use Cases

This project demonstrates a **scalable architecture** that starts as a monorepo and can easily evolve into micro-frontends, showcasing several key architectural patterns:

### 🚀 **Scalable Architecture Journey**
- **Phase 1 - Monorepo**: Start with all modules as static libraries in a single repository
- **Phase 2 - Hybrid**: Mix static and remote modules as teams grow
- **Phase 3 - Micro-Frontends**: Extract modules to separate repositories with independent deployments
- **Zero Refactoring**: Same codebase supports all phases through environment configuration

### 🏗️ **Module Federation Architecture**
- **Independent Module Development**: Module1 and Module2 can be developed, built, and deployed independently
- **Dynamic Loading**: Modules can be loaded either statically (as libraries) or dynamically (via Module Federation)
- **Shared State Management**: Zustand store demonstrates state sharing across modules
- **Shared UI Components**: Common UI components (Loading, CountView) shared between modules

### 🔄 **Flexible Deployment Strategies**
- **Hybrid Loading**: Mix static and remote modules in the same application
- **Environment-Based Configuration**: Control module loading behavior via environment variables
- **Fallback Handling**: Graceful degradation when remote modules fail to load
- **Hot Module Replacement**: Development experience with live reloading

### 🎯 **Real-World Scenarios**

#### **Startup Growth Strategy**
- **Start**: Monorepo with all modules static (simple setup, fast development)
- **Scale**: Gradually migrate modules to remote deployment as teams grow
- **Maintain**: Shared dependencies and state management across all phases
- **Benefit**: Independent release cycles without architectural rewrites

#### **Legacy System Integration**
- Integrate new React modules into existing applications
- Share authentication, routing, and state management
- Maintain consistent UI/UX across different technology stacks
- Enable gradual migration without big-bang rewrites

#### **Multi-Team Development**
- Independent teams can own and deploy their modules
- Shared design system and component library
- Centralized routing and navigation
- Consistent development experience across teams

### 🛠️ **Technical Features**
- **React 19 + TypeScript**: Modern React with full type safety
- **Material-UI**: Consistent design system
- **React Router**: Client-side routing with module integration
- **Zustand**: Lightweight state management
- **Vite**: Fast build tooling with Module Federation support
- **Nx**: Monorepo management with intelligent caching

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve single-page-app
```

To create a production bundle:

```sh
npx nx build single-page-app
```

To see all available targets to run for a project, run:

```sh
npx nx show project single-page-app
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app apps/demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib libraries/mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
