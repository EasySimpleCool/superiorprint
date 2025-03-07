# Development Process

## Operating Modes

### Plan Mode (Default)
- Initial mode for all interactions
- Focus on planning and documentation
- No code changes are made
- Stays active until explicitly switched to Act mode
- Indicated by `# Mode: PLAN` at start of responses

### Act Mode
- Activated by typing `ACT`
- Implements the approved plan
- Makes actual code changes
- Returns to Plan mode after completion
- Indicated by `# Mode: ACT` at start of responses

## Feature Request Template

When requesting a new feature or change, you can simply describe what you want, and I will:

1. Create a new markdown file in `docs/features/` with the following structure:
   ```
   feature-name.md
   ├── Overview
   ├── Requirements
   ├── Architecture
   │   ├── Components
   │   ├── Data Flow
   │   └── Technical Decisions
   ├── Implementation Plan
   └── Testing Strategy
   ```

2. Document the reasoning behind technical decisions
3. Wait for your approval before implementation
4. Track changes in the same document

## Example Usage

You: "Add a dark mode feature"

I will (in Plan mode):
1. Create: `docs/features/dark-mode.md` with full documentation
2. Present the plan for review
3. Wait for your `ACT` command before implementation

## Benefits

- Clear documentation of features
- Architectural decisions are recorded
- Easy to review before implementation
- Serves as future reference
- Keeps track of project evolution

## Process Steps

1. **Request** (Plan Mode): You describe what you want
2. **Documentation** (Plan Mode): I create detailed markdown file
3. **Review** (Plan Mode): You approve or request changes
4. **Implementation** (Act Mode): I execute the plan after you type `ACT`
5. **Verification** (Plan Mode): We ensure it meets requirements

## Mode Switching
- Type `PLAN` to force return to planning mode
- Type `ACT` to switch to implementation mode
- Each response starts with current mode indicator 