# CARRYFORM Product Experience

This component transforms the original editorial, full-screen landing-page format into a premium
product story for a portable cable organizer.

## Product source of truth

`public/images/product/cable-organizer.glb` is copied from the supplied source asset. Every product
view on the page loads that GLB directly through `model-viewer`; no replacement product drawings,
AI renders, or invented product geometry are used.

The inspected asset is a 835 KB glTF 2.0 binary with 37,316 rendered vertices and no embedded
animations. It includes physically based material extensions, which `model-viewer` renders with
environment lighting and contact shadows.

## Journey

1. The cable-clutter problem
2. The realization: organization that travels
3. Interactive product reveal
4. Product anatomy with visible-form labels
5. Four-step usage flow
6. Everyday workplace contexts
7. Design philosophy
8. Final product reveal

## Interaction and accessibility

- Each model supports drag orbit controls and slow automatic rotation.
- Header controls smoothly navigate to key scenes.
- Usage steps change the model camera angle.
- Intersection-based reveal animations are disabled for `prefers-reduced-motion`.
- The mobile layout collapses navigation and reflows every scene.

## Usage

```tsx
import Carryform from "@/components/ui/florilegium-template"

export default function Page() {
  return <Carryform brand="CARRYFORM" />
}
```

`model-viewer` is dynamically loaded from its official package CDN, so no new project dependency is
required. If deploying under a subpath, update the `MODEL` constant in the component to the correct
public asset URL.
