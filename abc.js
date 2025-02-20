const { execSync } = require("child_process");
const fs = require("fs");

// Read package.json
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const installedDeps = new Set([
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.devDependencies || {})
]);

// List of missing dependencies (replace this with your actual missing list)
const missingDeps = [
  "@radix-ui/react-alert-dialog",
  "@radix-ui/react-aspect-ratio",
  "@radix-ui/react-avatar",
  "@radix-ui/react-slot",
  "recharts",
  "@radix-ui/react-checkbox",
  "@radix-ui/react-collapsible",
  "@radix-ui/react-dialog",
  "cmdk",
  "@radix-ui/react-context-menu",
  "vaul",
  "@radix-ui/react-dropdown-menu",
  "react-hook-form",
  "@radix-ui/react-hover-card",
  "input-otp",
  "@radix-ui/react-menubar",
  "@radix-ui/react-navigation-menu",
  "@radix-ui/react-popover",
  "@radix-ui/react-progress",
  "@radix-ui/react-radio-group",
  "react-resizable-panels",
  "@radix-ui/react-scroll-area",
  "@radix-ui/react-select",
  "@radix-ui/react-separator",
  "@radix-ui/react-slider",
  "next-themes",
  "sonner",
  "@radix-ui/react-switch",
  "@radix-ui/react-tabs",
  "@radix-ui/react-toast",
  "@radix-ui/react-toggle-group",
  "@radix-ui/react-toggle",
  "@radix-ui/react-tooltip"
];

// Filter missing packages
const toInstall = missingDeps.filter(dep => !installedDeps.has(dep));

if (toInstall.length > 0) {
  console.log(`Installing missing dependencies: ${toInstall.join(", ")}`);
  execSync(`npm install ${toInstall.join(" ")} --force`, { stdio: "inherit" });
} else {
  console.log("All dependencies are installed.");
}
