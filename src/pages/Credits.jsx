import Illustration, { SCENE_NAMES, SCHEMES } from '../components/Illustrations.jsx'

const ACTIVITY_SCENES = SCENE_NAMES.filter((n) => !['portrait', 'chat', 'call', 'email'].includes(n))

export default function Credits() {
  return (
    <div className="wrap credits">
      <h1>Illustration system</h1>
      <p className="lede" style={{ margin: '16px 0 24px', maxWidth: 760 }}>
        Every image on this site is an original flat-vector illustration drawn in SVG, using only the CCA
        illustration palette from the brand guidelines. Nothing is photography and nothing is stock, so there are
        no licences to clear and no people pictured who did not agree to be here.
      </p>
      <div className="notice">
        <strong>How it works.</strong>
        <p className="small" style={{ marginTop: 8 }}>
          Each illustration is one scene drawn in a 400×300 box and cropped like a photograph, so the same artwork
          works in a portrait tile, a square card and a wide page banner. Scenes are recoloured by scheme, which is
          why a repeated scene never reads as a repeated image. Add a scene in{' '}
          <code>src/components/Illustrations.jsx</code>, then point an activity or category at it in{' '}
          <code>src/data.js</code>.
        </p>
      </div>

      <h3 style={{ marginTop: 40 }}>Scenes</h3>
      <div className="swatches">
        {ACTIVITY_SCENES.map((name, i) => (
          <figure key={name} className="swatch">
            <Illustration name={name} scheme={Object.keys(SCHEMES)[i % Object.keys(SCHEMES).length]} />
            <figcaption className="caption">{name}</figcaption>
          </figure>
        ))}
      </div>

      <h3 style={{ marginTop: 40 }}>Colour schemes</h3>
      <div className="swatches">
        {Object.keys(SCHEMES).map((scheme) => (
          <figure key={scheme} className="swatch">
            <Illustration name="community" scheme={scheme} />
            <figcaption className="caption">{scheme}</figcaption>
          </figure>
        ))}
      </div>

      <p className="small" style={{ marginTop: 34 }}>
        The one remaining third-party asset is the explainer video on the home page — a TED talk standing in for
        CCA’s own film.
      </p>
    </div>
  )
}
