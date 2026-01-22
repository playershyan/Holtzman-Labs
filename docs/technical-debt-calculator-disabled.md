# Technical Debt Calculator - Disabled Components

**Status:** 🔴 DISABLED
**Date Disabled:** 2026-01-23
**Reason:** Temporarily disabled by user request

---

## Summary

The Technical Debt Calculator has been **disabled** from the live website. All code files remain intact and can be re-enabled quickly by following the instructions below.

---

## What Was Disabled

The Technical Debt Calculator was previously displayed in the **EngineeringPhilosophy** section on the home page (`/`). It showed an interactive calculator that:
- Calculated the cost of technical debt based on user inputs
- Compared "Your Way" vs "Holtzman Way" approaches
- Demonstrated potential savings with proper engineering practices

### Visual Impact:
- **Before:** Two-column layout (Philosophy text on left, Calculator on right)
- **After:** Single-column layout (Philosophy text only, calculator hidden)

---

## Files Involved

All calculator-related files are **still present** in the codebase:

### 1. **Main Component**
- **File:** `components/TechnicalDebtCalculator.tsx`
- **Status:** ✅ Intact (not deleted)
- **Description:** Main calculator UI with inputs (sliders, dropdowns) and results display

### 2. **Wrapper Component**
- **File:** `components/EngineeringPhilosophy.tsx`
- **Status:** ⚠️ Modified (calculator commented out)
- **Description:** Section component that wraps philosophy text and calculator

### 3. **Calculation Logic**
- **File:** `hooks/useDebtCalculation.ts`
- **Status:** ✅ Intact (not deleted)
- **Description:** Custom hook with SQALE-based formula for debt calculation

### 4. **Animation Hook**
- **File:** `hooks/useAnimatedNumber.ts`
- **Status:** ✅ Intact (not deleted)
- **Description:** Custom hook for count-up animations with accessibility support

### 5. **Page Integration**
- **File:** `app/page.tsx`
- **Status:** ✅ Intact (still imports EngineeringPhilosophy)
- **Description:** Home page that renders the EngineeringPhilosophy section

---

## Changes Made to Disable

Only **ONE file** was modified: `components/EngineeringPhilosophy.tsx`

### Change 1: Commented Import (Line 4-5)
```tsx
// BEFORE:
import TechnicalDebtCalculator from './TechnicalDebtCalculator';

// AFTER:
// DISABLED: Technical Debt Calculator
// import TechnicalDebtCalculator from './TechnicalDebtCalculator';
```

### Change 2: Layout Adjustment (Line 11-12)
```tsx
// BEFORE:
<div className="grid md:grid-cols-2 gap-8 items-start">

// AFTER:
{/* DISABLED: Changed from grid md:grid-cols-2 to single column */}
<div className="max-w-3xl">
```

### Change 3: Commented Calculator Component (Line 79-82)
```tsx
// BEFORE:
{/* Right Column: Technical Debt Calculator */}
<div>
  <TechnicalDebtCalculator />
</div>

// AFTER:
{/* DISABLED: Right Column - Technical Debt Calculator */}
{/* <div>
  <TechnicalDebtCalculator />
</div> */}
```

---

## How to Re-Enable the Calculator

### Option 1: Quick Re-Enable (Recommended)

**Step 1:** Open `components/EngineeringPhilosophy.tsx`

**Step 2:** Uncomment the import (line 4-5)
```tsx
// Change this:
// DISABLED: Technical Debt Calculator
// import TechnicalDebtCalculator from './TechnicalDebtCalculator';

// To this:
import TechnicalDebtCalculator from './TechnicalDebtCalculator';
```

**Step 3:** Restore the grid layout (line 11-12)
```tsx
// Change this:
{/* DISABLED: Changed from grid md:grid-cols-2 to single column */}
<div className="max-w-3xl">

// To this:
<div className="grid md:grid-cols-2 gap-8 items-start">
```

**Step 4:** Uncomment the calculator component (line 79-82)
```tsx
// Change this:
{/* DISABLED: Right Column - Technical Debt Calculator */}
{/* <div>
  <TechnicalDebtCalculator />
</div> */}

// To this:
{/* Right Column: Technical Debt Calculator */}
<div>
  <TechnicalDebtCalculator />
</div>
```

**Step 5:** Build and test
```bash
npm run build
npm run dev
```

### Option 2: Git Revert (If using version control)

If you committed the disabled state, you can revert to the previous commit:

```bash
# View commit history
git log --oneline components/EngineeringPhilosophy.tsx

# Revert to the commit before disabling
git checkout <commit-hash> -- components/EngineeringPhilosophy.tsx

# Rebuild
npm run build
```

---

## Testing After Re-Enabling

### Visual Checks:
1. ✅ Calculator appears on home page (`/`)
2. ✅ Two-column layout (text left, calculator right)
3. ✅ All inputs work (sliders, dropdowns, number inputs)
4. ✅ Results animate when inputs change
5. ✅ Responsive on mobile (stacks to single column)

### Functional Checks:
1. ✅ Calculation updates in real-time
2. ✅ "Your Way" vs "Holtzman Way" comparison shows
3. ✅ Savings percentage displays correctly
4. ✅ No console errors
5. ✅ Build completes successfully

### Test Inputs (Expected Results):
```
Test 1: Minimal Debt
- Team: 2, Age: 6mo, Shortcuts: 10, Coverage: 90%, Review: Always, Deploy: Daily
- Expected: ~$450

Test 2: High Debt
- Team: 10, Age: 36mo, Shortcuts: 80, Coverage: 20%, Review: Never, Deploy: Monthly
- Expected: ~$47,100

Test 3: Mid-range
- Team: 5, Age: 18mo, Shortcuts: 50, Coverage: 60%, Review: Sometimes, Deploy: Weekly
- Expected: ~$6,850
```

---

## Additional Resources

### Original Implementation Plan:
- See: `C:\Users\playe\.claude\plans\lexical-prancing-cocoa.md`
- Contains full technical specification and formula documentation

### Formula Documentation:
- Based on **SQALE methodology** (industry standard)
- Interest rates: **5-42%** (validated against research)
- Team scaling: **Brooks's Law** (teamSize^0.85)
- Hourly rate: **$100** (2026 market rate)

### Related Components:
- `components/NerdyStats.tsx` - Reference for animation patterns
- `components/LifeSimulation.tsx` - Reference for slider controls
- `app/globals.css` - Gradient and styling utilities

---

## Troubleshooting

### Issue: "Cannot find module TechnicalDebtCalculator"
**Solution:** Make sure you uncommented the import line at the top of the file.

### Issue: "Module not found: Can't resolve '@/hooks/useDebtCalculation'"
**Solution:** Files are intact. Restart dev server: `npm run dev`

### Issue: Layout looks broken after re-enabling
**Solution:** Ensure you changed `max-w-3xl` back to `grid md:grid-cols-2 gap-8 items-start`

### Issue: Calculator shows but doesn't animate
**Solution:** Check that `useAnimatedNumber` hook is working. Clear browser cache and hard refresh.

---

## Notes

- **All files are preserved** - Nothing was deleted, only commented out
- **Re-enabling takes ~2 minutes** - Just uncomment 3 sections
- **No data loss** - Calculator logic and formulas remain intact
- **Easy rollback** - Can disable again by reverting the same 3 changes

---

## Questions or Issues?

If you encounter problems re-enabling the calculator:
1. Check that all 3 changes were made in `EngineeringPhilosophy.tsx`
2. Verify no TypeScript errors in the terminal
3. Clear browser cache and restart dev server
4. Check console for runtime errors

---

**Last Updated:** 2026-01-23
**Modified By:** Claude Code
**Component Status:** 🔴 Disabled (can be re-enabled anytime)
