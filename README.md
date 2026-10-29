# Cooked Product Costing

A Food Technology educational and practical worksheet application for calculating ingredient direct costs, indirect overhead, unit cost per serving, mark-up pricing, batch profit, and generating print-ready A4 worksheets.

## Features

- **CVE Colleges School Worksheet Header**: Includes the official school header banner image and student/group identification fields.
- **Dynamic Ingredient Costing**: Real-time entry of quantity, unit, particulars, and cost in Philippine Pesos (₱). Add and remove rows as needed.
- **Automated Mathematical Proofs**:
  - Direct ingredient cost summation formula.
  - Unit Cost equation: $(Ingredient\ Cost + \frac{1}{2}\ of\ cost\ of\ ingredients) \div Servings$.
  - Selling price calculation applying mark-up percentage: $Unit\ Cost \times (1 + Mark\text{-}up\ Rate)$.
  - Batch profit and profit per serving computation.
- **Costing Summary**: Clean, formatted breakdown table for quick review.
- **Module Sample & Reset**: One-click loading of standard sample recipes (e.g. Chicken recipe) and worksheet reset.
- **Print & PDF Export**: Tailored `@media print` layout optimized for A4 portrait with clean margins, hiding interactive UI controls and splitting neatly across two pages.
- **Local Persistence**: State automatically persists across page refreshes via `localStorage`.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
