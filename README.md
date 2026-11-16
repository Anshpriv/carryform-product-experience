# CARRYFORM — portable cable organization

The landing-page component is `components/florilegium-template/florilegium-template.tsx`.
It is an editorial, scene-based product journey with a preloader, interactive navigation,
scroll reveals and responsive layouts, built around the supplied GLB.

## Product asset

The real product model is served from `public/images/product/cable-organizer.glb`. The page uses
`<model-viewer>` on the client for interactive 3D inspection with studio lighting. No cable
organizer geometry or product imagery is fabricated.

## Use

```tsx
import Carryform from "@/components/ui/florilegium-template"

export default function Page() {
  return <Carryform brand="CARRYFORM" />
}
```

## Deploy on Netlify

The repository's `netlify.toml` configures the production build and points Netlify
to `.next-carryform`, the custom Next.js build directory. Keep the Netlify site
base directory set to the repository root and avoid overriding the publish
directory in the Netlify UI.
