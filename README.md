# Award Winning Website

## First Debugging
Issue: npx tailwindcss init failed with "could not determine executable to run," and the tailwindcss executable was missing from node_modules/.bin/.

Cause: Incompatibility between the installed Tailwind CSS version and the Node.js version being used. While the specific versions weren't explicitly stated as the root cause initially, switching to a more recent and recommended Node.js version (20.x.x) resolved the issue.

Solve: Switching to a compatible Node.js version using nvm use 20 allowed the tailwindcss package to be correctly installed and its executable to be placed in the node_modules/.bin/ directory, enabling the Tailwind CSS CLI to be found and used.

Now the version on Node v20.x.x / Tailwindcss v3.x.x
