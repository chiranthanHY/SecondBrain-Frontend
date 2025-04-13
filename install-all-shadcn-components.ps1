$components = @(
  "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar", "badge", "breadcrumb",
  "button", "calendar", "card", "carousel", "chart", "checkbox", "collapsible", "command",
  "context-menu", "dialog", "drawer", "dropdown-menu", "form", "hover-card", "input",
  "label", "menubar", "navigation-menu", "popover", "progress", "radio-group",
  "scroll-area", "select", "separator", "sheet", "skeleton", "slider",
  "switch", "table", "tabs", "textarea", "toast", "toggle", "tooltip"
)

foreach ($component in $components) {
  Write-Host "🧱 Installing $component..."
  npx shadcn@latest add button $component
}

Write-Host "✅ All components installed!"
